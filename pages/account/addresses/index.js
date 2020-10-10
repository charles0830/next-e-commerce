import React, { useState } from "react";

import AccountSidebar from "@/components/AccountSidebar";
import Layout from "@/components/Layout";
import AddressCard from "@/components/AddressCard";
import AddAddress from "./add-address";

import styles from "./address.module.scss";
import { useAuth } from "@/firebase/context";

export default function Addresses() {
  const [toggleModal, setModal] = useState(false);

  const { user } = useAuth();

  console.log("toogle: " + toggleModal);

  return (
    <Layout noCategories>
      <AccountSidebar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Addresses</h1>
        <div className={styles.content}>
          {user?.orders?.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>You have not any address</p>
              <button
                className={styles.addAddress}
                onClick={() => setModal(true)}
              >
                <p>+</p>Add New Address
              </button>
            </div>
          ) : (
            <div className={styles.addresses}>
              <button
                className={styles.addAddress}
                onClick={() => setModal(true)}
              >
                <p>+</p>Add New Address
              </button>
              <AddressCard />
              {user?.addresses?.map((item) => {
                return <AddressCard data={item} />;
              })}
            </div>
          )}
        </div>
        {toggleModal && <AddAddress closeEvent={() => setModal(false)} />}
      </main>
    </Layout>
  );
}
