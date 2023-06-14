import { useRouter } from 'next/router';
import Link from 'next/link';
import coffeeStoresData from '../../data/coffee-stores.json';
import Head from 'next/head';

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStores: coffeeStoresData.find(
        ({ id }) => id.toString() === params.id
      ), // dynamic id
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((item) => {
    return {
      paths: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const CoffeeStore = (props) => {
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, name, neighbourhood } = props.coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <Link href="/">Back to Home</Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </>
  );
};

export default CoffeeStore;
