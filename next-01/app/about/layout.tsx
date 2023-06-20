import styles from './styles.module.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about nav bar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
