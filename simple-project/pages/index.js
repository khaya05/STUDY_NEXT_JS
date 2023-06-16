import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>NextJs pre-rendering</h1>
      <Link href="/users">Users </Link>
      <Link href="/posts">Posts</Link>
    </>
  );
}
