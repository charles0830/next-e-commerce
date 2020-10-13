import Head from "next/head";
import styles from "./index.module.scss";

import Button from "components/FilterButton";
import HorizontalCard from "components/HomeCard/horizontal-card";
import VerticalCard from "components/HomeCard/vertical-card";
import Products from "components/HomeProducts";

import { db } from "config/firebase";
import Layout from "components/Layout";

import { useAuth } from "../firebase/context";

export default function Home() {
  db.collection("Users")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });

  const auth = useAuth();
  console.log(auth);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.emoji}>⚡</span>New In
            </h1>
            <div className={styles.headerButtons}>
              <Button type="sort" style={{ marginRight: 20 }} />
              <Button count={0} />
            </div>
          </div>

          <Products>
            <HorizontalCard
              bgColor="#BCE7F0"
              title="Get up to 50% off"
              image="https://i.ibb.co/wL3nWkm/Pngtree-memphis-style-line-point-line-3797599.png"
            />
            <HorizontalCard
              bgColor="#dec8f3"
              image="https://i.ibb.co/qdY3T5g/kindpng-53319.png"
              title="New Jordan Series"
              desc="Best of daily wear"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="Hugo Boss Leather Jacket"
              image="https://i.ibb.co/ZK2L8cg/kisspng-fashion-model-hugo-boss-pinpoint-resource-of-oklah-mens-fashion-5a78e637c1bde9-3434957015178.png"
              price="300"
              sale_price="200"
            />
            <VerticalCard
              bgColor="#f6f6f6"
              name="Polka-dotted slip dress"
              image="https://i.ibb.co/xmJdGXD/kisspng-slip-dress-clothing-casual-fashion-model-5abb4a319d2986-8864671115222236656438.png"
              price="200"
            />
          </Products>
          <Products reverse>
            <HorizontalCard
              bgColor="#FBE285"
              image="https://i.ibb.co/fd9gS8p/kisspng-model-fashion-photography-fashion-photography-model-5abb4a53e1f5b0-6067237715222236999256.png"
              title="New In Knitwear"
              desc="Layers. On. Layers"
            />
            <HorizontalCard
              bgColor="#F9CADA"
              image="https://i.ibb.co/db3Ww4J/kisspng-barbara-palvin-fashion-model-5b2b93c8c2c3a8-5507716115295825367978.png"
              title="New Season"
              desc="Reflect your style"
            />
            <VerticalCard bgColor="#f6f6f6" />
            <VerticalCard bgColor="#f6f6f6" />
          </Products>
          <Products>
            <HorizontalCard
              bgColor="#99E6B0"
              image="https://i.ibb.co/0yKq1HK/kindpng-4043322.png"
              title="End of season"
              desc="Always sporty"
            />
            <HorizontalCard
              bgColor="#f3e6c8"
              image="https://i.ibb.co/68XpWPB/pngkey-com-ladies-purse-png-2499694.png"
              title="New Accessories"
              desc="Complete your combine"
            />
            <VerticalCard bgColor="#f6f6f6" />
            <VerticalCard bgColor="#f6f6f6" />
          </Products>
        </main>
      </div>
    </Layout>
  );
}
