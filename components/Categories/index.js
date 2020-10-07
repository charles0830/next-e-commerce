import React from "react";

import styles from "./categories.module.scss";
import Link from "next/link";

const CategoryItem = ({ name, link, emoji }) => {
  return (
    <li className={styles.categoryItem}>
      <Link href="/">
        <a>
          <span className={styles.emoji}>{emoji}</span>
          <span className={styles.categoryName}>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default function CategoriesBar() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explore</h2>
      <ul className={styles.categories}>
        <CategoryItem name="New In" emoji="⚡" />
        <CategoryItem name="Clothing" emoji="👚" />
        <CategoryItem name="Shoes" emoji="👠" />
        <CategoryItem name="Accessories" emoji="👜" />
        <CategoryItem name="Activewear" emoji="🤸" />
        <CategoryItem name="Gifts & Living" emoji="🎁" />
        <CategoryItem name="Inspiration" emoji="💎" />
      </ul>
    </div>
  );
}
