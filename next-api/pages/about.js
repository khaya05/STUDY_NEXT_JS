import Footer from '@/layout/Footer';

function About() {
  return <div>About</div>;
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
