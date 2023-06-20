import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Link href='/about'>{'about =>'}</Link>
    </main>
  );
}
 