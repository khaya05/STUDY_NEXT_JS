const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map(({ id, title, category }) => {
        return (
          <div key={id}>
            <h2>
              {id} | {title} | {category}
            </h2>
          </div>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}

export default NewsArticleList;
