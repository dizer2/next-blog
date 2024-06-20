"use client";

import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Category {
  id: string;
  slug: string;
  title: string;
  img: string;
}

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/categories');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/blog?cat=${item.slug}`}
            className={styles.category}
            data-category={item.slug}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            <span className={styles.description}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
