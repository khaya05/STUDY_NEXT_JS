import Link from 'next/link';

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await resp.json();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}

export default PostList;
