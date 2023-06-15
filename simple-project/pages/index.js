import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <h1>NextJs pre-rendering</h1>;
    </>
  );
}
