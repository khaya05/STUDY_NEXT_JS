function About() {
  return <div>About</div>;
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <footer />
    </>
  );
};
