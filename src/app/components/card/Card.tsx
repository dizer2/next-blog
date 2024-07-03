import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { Button, Skeleton } from "@nextui-org/react";

interface Article {
  id: string;
  createdAt: any;
  slug: string;
  catSlug: string;
  title: string;
  description: string;
  views: number;
  img?: string;
  userEmail: string;
}

interface CardProps {
  article: Article;
  loading: boolean;
}

export function Card({ article, loading }: CardProps) {
  const formattedDate = new Date(article.createdAt).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div className={styles.container}>
      {article.img && (
        <div className={styles.imageContainer}>
          <Image
            src={`${article.img}`}
            alt="yuriiblog"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{formattedDate} </span>
          <span className={styles.category}>- {article.catSlug}</span>
        </div>
        <Link href={`/posts/${article.slug}`}>
          <h1 className={styles.title}>{article.title}</h1>
        </Link>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: article.description.substring(0, 120) + "...",
          }}
        ></p>
        <Button
          as={Link}
          color="primary"
          className={styles.link}
          target="blank"
          href={`/posts/${article.slug}`}
        >
          Read more
        </Button>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Skeleton style={{ height: "100%" }} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detailSkeleton}>
          <Skeleton
            style={{ width: "80px", height: "20px", marginBottom: "3px" }}
            className={styles.date}
          />
          <Skeleton
            style={{ width: "120px", height: "20px", marginTop: "3px" }}
            className={styles.category}
          />
        </div>
        <Skeleton
          style={{ width: "90%", height: "30px", marginTop: "10px" }}
          className={styles.title}
        />
        <Skeleton
          style={{ width: "90%", height: "30px", margin: "5px 0" }}
          className={styles.description}
        />
        <Skeleton
          style={{ width: "100px", height: "40px" }}
          className={styles.link}
        />
      </div>
    </div>
  );
}
