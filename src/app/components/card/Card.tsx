import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

interface Article {
  urlToImage: string;
  publishedAt: string;
  title: string;
  url: string;
  description: string;
}

interface CardProps {
  article: Article;
}

export function Card({ article }: CardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      {article.urlToImage && (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={article.urlToImage} alt="" fill className={styles.image} loading="lazy" />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
              <span className={styles.date}>{formattedDate}</span>
            </div>
            <Link href="/">
              <h1>{article.title}</h1>
            </Link>
            <p className={styles.description}>
              {article.description}
            </p>
            <Link className={styles.link} target="blank" href={article.url}>Read more</Link>
          </div>
        </div>
      )}
    </>
  );
}
