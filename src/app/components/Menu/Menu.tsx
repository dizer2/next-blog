'use client'

import Link from "next/link";
import styles from "./menu.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { CategoryList } from "../categoryList/CategoryList";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

interface Articles {
  id: string;
  createdAt: any; 
  slug: string;
  title: string;
  catSlug: string,
  description: string;
  views: number;
  img?: string; 
  user: {
    name: string
    image: string
  }
  userEmail: string;
}

export function Menu() {
  const [categoryList] = useState<string[]>(["style", "fashion", "food", "travel"]);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/popular
          `, {
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setArticles(data.posts);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
 
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <div className={styles.items}>
      {articles.map((item) => (
        
         <Card as={Link} href={`posts/${item.slug}`} key={item.id} className={styles.card}>
         <CardHeader className="justify-between">
           <div className="flex gap-5">
              {item.user.image && (
                <Avatar isBordered radius="full" size="md" src={item.user.image} />
              )}
             <div className={`flex flex-col ml-5 gap-1 items-start justify-center ${styles.user__block}`}>
               <h4 className="text-small font-semibold leading-none text-default-600">{item.user.name}</h4>
               <h5 className="text-small tracking-tight text-default-400">{item.userEmail}</h5>
             </div>
           </div>
          <Button className={`${styles.category} ${styles.travel}`} data-category={item.catSlug}>{item.catSlug}</Button>
         </CardHeader>
         <div className="px-3 py-0 text-small text-default-400">
           <p>
             {item.title}
           </p>
         </div>
         <CardFooter className="gap-3">
           <div className="flex gap-1">
             <p className="font-semibold text-default-400 text-small">{item.views}</p>
             <p className=" text-default-400 text-small">views</p>
           </div>
         </CardFooter>
       </Card>
      ))}
      </div> 

      <div className={styles.categoryList}>
       <CategoryList />
      </div>
 
    </div>
  );
}
