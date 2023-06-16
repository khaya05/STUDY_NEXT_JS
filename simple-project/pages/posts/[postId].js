import { useRouter } from 'next/router';

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>{post.id}</h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  // const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await resp.json();
  // const paths = posts.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      { params: { postId: '2' } },
      { params: { postId: '1' } },
      { params: { postId: '3' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await resp.json();
  console.log(`Generating page for /posts/${params.postId}`);
  return { props: { post: data } };
}

export default Post;
