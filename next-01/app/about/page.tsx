import Link from 'next/link';

function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/"> {'<= Home page'}</Link>
    </>
  );
}

export default About;
