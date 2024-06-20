'use client'

import { MyPagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";
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

export function CardList({ initialPage  }: { initialPage : number }) {
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
        const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
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
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <Card loading={loading} article={article} />
          </div>
        ))}
      </div>
      <MyPagination page={page} setPage={setPage} totalPages={totalPage} loading={loading}/>
    </div>
  );
}
