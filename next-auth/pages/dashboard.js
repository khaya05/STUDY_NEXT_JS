import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session, status);

  useEffect(() => {
    if (status === 'authenticated' && !session) {
      signIn();
    } else if (status === 'loading' && session === undefined) {
      // Redirect the user to the sign-in page
      router.push('/api/auth/signin');
    }
  }, [session, status, router]);

  if (status === 'loading' && session === undefined) {
    return <h1>Loading...</h1>;
  }

  if (status === 'authenticated') {
    return <h1>Dashboard page</h1>;
  }

  // This block will only be reached if the user is not signed in and the status is not 'loading'
  return null;
}
