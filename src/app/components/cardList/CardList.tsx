'use client'

import { MyPagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";
import { Suspense, useEffect, useState } from "react";

export function CardList() {
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchArticles = async (page: number) => {
      setLoading(true); 
      const startTime = Date.now(); 
      const response = await fetch(`https://newsapi.org/v2/everything?q=sports&pageSize=10&page=${page}&apiKey=299f87ea269b477c8ead44e8624c97eb`);
      const data = await response.json();
      setArticles(data.articles);
      console.log(data);
      const remainingTime = Math.max(2000 - (Date.now() - startTime), 0); 
      setTimeout(() => setLoading(false), remainingTime); 
    };

    fetchArticles(page);
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
      <MyPagination page={page} setPage={setPage} loading={loading} />
    </div>
  );
}
