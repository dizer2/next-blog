'use client'

import { MyPagination } from "../pagination/Pagination";
import styles from "./cardList.module.css"
import { Card } from "../card/Card";
import { useEffect, useState } from "react";

export function CardList() {
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState<any[]>([]);

  const fetchArticles = async (page: number) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=sports&pageSize=10&page=${page}&apiKey=299f87ea269b477c8ead44e8624c97eb`);
    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <Card article={article} />
          </div>
        ))}
      </div>
      <MyPagination page={page} setPage={setPage}/>
    </div>
  );
}
