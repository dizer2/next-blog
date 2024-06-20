'use client'

import Image from "next/image";
import styles from "./singlePage.module.css"
import Comments from "@/app/components/comments/Comments";
import { Menu } from "@/app/components/Menu/Menu";
import { useEffect, useState } from "react";

export default function SinglePage({ params }: any) {

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  try {
	// 		const res = await fetch(`
	// 		  http://localhost:3000/api/posts/${slug}}
	// 		  `, {
	// 		  cache: "no-store"
	// 		});
	
	// 		if (!res.ok) {
	// 		  throw new Error("Failed to fetch data");
	// 		}
	
	// 		const data = await res.json();
	// 		console.log(data);
	// 	  } catch (error) {
	// 		console.error("Error fetching data:");
	// 	  } 
	// 	};
	
	// 	fetchData();
	//   }, [slug]);

  return (
    <div className={styles.container}>
		<div className={styles.infoContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Loram impus dolor sit ame consecture adipcitn elite. </h1>
				
				<div className={styles.user}>
					<div className={styles.userImageContainer}>
						<Image src="/p1.jpeg" alt="s" fill className={styles.avatar}/>
					</div>
					<div className={styles.userTextContainer}>
						<span className={styles.usernmae}>John Doe</span>
						<span className={styles.date}>01.01.2024</span>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src="/p1.jpeg" alt="s" fill className={styles.image}/>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.post}>
				<div className={styles.description}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sapiente assumenda ad? Nulla cum non sequi rem distinctio quis rerum, eveniet blanditiis error fugit saepe facilis unde deleniti maxime. Saepe dolorum, quo eaque rerum officia sed libero quas officiis nisi fuga quibusdam explicabo quae beatae impedit numquam facere nesciunt quis. Fuga ipsum quam accusamus ad hic quisquam inventore reprehenderit, facere, qui ut commodi excepturi dolorum quo atque! Debitis, dolore ducimu
					</p>

					<h2>
						Hello world
					</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sapiente assumenda ad? Nulla cum non sequi rem distinctio quis rerum, eveniet blanditiis error fugit saepe facilis unde deleniti maxime. Saepe dolorum, quo eaque rerum officia sed libero quas officiis nisi fuga quibusdam explicabo quae beatae impedit numquam facere nesciunt quis. Fuga ipsum quam accusamus ad hic quisquam inventore reprehenderit, facere, qui ut commodi excepturi dolorum quo atque! Debitis, dolore ducimu
					</p>
				</div>
				<div className={styles.comment}>
					<Comments />
				</div>
			</div>
			<Menu />
		</div>
    </div>
  );
}
