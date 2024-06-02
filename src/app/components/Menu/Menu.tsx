'use client'

import Link from "next/link";
import styles from "./menu.module.css"
import Image from "next/image";
import { useState } from "react";
import { CategoryList } from "../categoryList/CategoryList";

export function Menu() {
  const [categoryList] = useState<string[]>(["style", "fashion", "food", "travel"]);
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <div className={styles.items}>
      {categoryList.map((item, index) => (
        <Link key={index}  href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span  className={`${styles.category} ${styles.travel}`} data-category={item}>{item}</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>

            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      ))}
      </div> 

      <div className={styles.categoryList}>
       <CategoryList />
      </div>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>

      <div className={styles.items}>
      {categoryList.map((item, index) => (
        <Link key={index}  href="/" className={styles.item}>
          <div className={styles.imageContaienr}>
            <Image src="/p1.jpeg" alt="blog" fill className={styles.image}/>
          </div>

          <div className={styles.textContainer}>
            <span  className={`${styles.category} ${styles.travel}`} data-category={item}>{item}</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h3>

            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      ))}
      </div> 
    </div>
  );
}
