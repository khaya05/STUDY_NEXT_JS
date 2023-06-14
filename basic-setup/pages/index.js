import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';
import Card from '../components/card';
import { fetchCoffeeStores } from '../lib/coffee-stores';
import useTrackLocations from '../hooks/use-track-location';
import { useEffect, useState } from 'react';

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStores,
    },
  };
}

// Home
export default function Home({ coffeeStores }) {
  const { handleTrackLocation, latlng, locationErrorMsg, isLoading } =
    useTrackLocations();

  const [coffeeStoresNearMe, setCoffeeStoresNearMe] = useState('');
  const [coffeeStoresError, setCoffeeStoresError] = useState(null);

  useEffect(() => {
    const setCoffeeStoresByLocation = async function (latlng) {
      try {
        const stores = await fetchCoffeeStores(latlng, 30);
        setCoffeeStores(stores);
      } catch (error) {
        console.log({ error });
        setCoffeeStoresError(error.message);
      }
    };
    setCoffeeStoresByLocation();
  }, [latlng]);

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={isLoading ? 'Locating...' : 'View stores nearby'}
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>

        {coffeeStoresNearMe.length > 0 && (
          <>
            {' '}
            <div className={styles.sectionWrapper}>
              <h2 className={styles.heading2}>Stores near me</h2>
              <div className={styles.cardLayout}>
                {coffeeStoresNearMe.map(({ name, imgUrl, id }) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      to={`/coffee-store/${id}`}
                      imgUrl={
                        imgUrl ||
                        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                      }
                      className={styles.card}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}

        {coffeeStores.length > 0 && (
          <>
            {' '}
            <div className={styles.sectionWrapper}>
              <h2 className={styles.heading2}>Toronto stores</h2>
              <div className={styles.cardLayout}>
                {coffeeStores.map(({ name, imgUrl, id }) => {
                  return (
                    <Card
                      key={id}
                      name={name}
                      to={`/coffee-store/${id}`}
                      imgUrl={
                        imgUrl ||
                        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                      }
                      className={styles.card}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
