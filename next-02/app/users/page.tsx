import getAllUsers from '@/lib/getAllUsers';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map(({ id, name }) => {
        return (
          <>
            <p key={id}>
              <Link href={`users/${id}`}>{name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
