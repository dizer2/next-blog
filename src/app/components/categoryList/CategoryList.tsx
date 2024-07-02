"use client";

import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";

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

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          {[...Array(categories.length)].map((_, index) => (
            <Card key={index} className={`space-y-5 p-4 ${styles.skeleton}`} radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">  
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
          ))}
        </div>
      </div>
    );
  }

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
                width={20}
                height={20}
                alt={item.title}
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
