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
  loading: boolean;
}

export function Card({ article, loading }: CardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      {loading ? (
        <>
           <div className={styles.container}>
              <div className={styles.imageContainer}>
                <div className={`${styles.image} ${styles.imageLoading}`}></div>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.detail}>
                  <span className={styles.date}>00/00/0000</span>
                </div>
                <Link href="/">
                  <div className={styles.titleLoading}></div>
                </Link>
                <div className={styles.descriptionLoading}></div>
                <div className={styles.descriptionLoading}></div>
                <div className={styles.descriptionLoading}></div>
                <Link className={styles.link} target="blank" href={article.url}>Loading</Link>
              </div>
            </div>
        </>
      ) : (
        <>
          {article.urlToImage && (
            <div className={styles.container}>
              <div className={styles.imageContainer}>
                <Image src={article.urlToImage} alt="yuriiblog" fill className={styles.image} />
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
      )}
    </>
  );
}
