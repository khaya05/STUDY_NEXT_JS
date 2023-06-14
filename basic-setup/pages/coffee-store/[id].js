import { useRouter } from 'next/router';
import Link from 'next/link';

import coffeeStoresData from '../../data/coffee-stores.json';

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
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: false,
  };
}

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>Coffee store Page id: {id}</div>;<Link href="/">Back to Home</Link>
    </>
  );
};

export default CoffeeStore;
