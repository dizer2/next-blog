"use client";

import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";
import { useState } from "react";

export function CategoryList() {
  const [categoryList] = useState<string[]>(["style", "fashion", "food", "travel", "culture", "coding"]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryList.map((item, index) => (
          <Link
            key={index}
            href={`/blog?cat=${item}`}
            className={styles.category}
            data-category={item}
          >
            <Image
              src={`/${item}.png`}
              alt={item}
              width={32}
              height={32}
              className={styles.image}
            />
            <span className={styles.description}>{item}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
