'use client'

import { MyPagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card, CardSkeleton } from "../card/Card";
import { useEffect, useState } from "react";

interface Articles {
  id: string;
  createdAt: any; 
  slug: string;
  title: string;
  catSlug: string,
  description: string;
  views: number;
  img?: string; 
  userEmail: string;
}

interface CardList {
  initialPage: number,
  cat?: string
}

export function CardList({ initialPage, cat }: CardList) {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    console.log(page);
  }, [page])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}
          `, {
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setArticles(data.posts);
        setTotalPage(data.totalPage);
      } catch (error) {
        console.error("Error fetching data:");
      } finally {
        setTimeout(() => {
          setLoading(false); 
        }, 1000);
      }
    };

    fetchData();
  }, [page, cat]);



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
      {loading ? (
           Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.post}>
              <CardSkeleton />
            </div>
          ))
        ) : (
          articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <Card loading={loading} article={article} />
            </div>
          ))
        )}
      </div>
      <MyPagination page={page} setPage={setPage} totalPages={totalPage} setLoading={setLoading} loading={loading}/>
    </div>
  );
}
