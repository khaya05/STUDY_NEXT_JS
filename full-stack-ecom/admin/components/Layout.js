import { signIn, useSession } from 'next-auth/react';
import Nav from './Nav';

export default function Layout() {
  const { data: session } = useSession({ children });
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
        <div className="text-center w-full">
          <button
            className="bg-white hover:bg-white/90 p-2 rounded-lg text-black px-4"
            onClick={() => signIn('google')}
          >
            Log in with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen flex justify-between">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
