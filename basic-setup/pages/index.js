import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';
import Card from '../components/card';
import coffeeStores from '../data/coffee-stores.json';

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores,
    },
  };
}

export default function Home({coffeeStores}) {
  const handleOnBannerBtnClick = () => {
    console.log('hi banner button');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>

        <div className={styles.cardLayout}>
          {coffeeStores.map(({ name, imgUrl, id }) => {
            return (
              <Card
                key={id}
                name={name}
                to={`/coffee-store/${id}`}
                imgUrl={imgUrl}
                className={styles.card}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
