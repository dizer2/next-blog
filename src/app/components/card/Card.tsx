import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

interface Article {
  id: string;
  createdAt: any; 
  slug: string;
  catSlug: string,
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
  const formattedDate = new Date(article.createdAt).toLocaleDateString('en-GB', {
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
                <Link className={styles.link} target="blank" href={""}>Loading</Link>
              </div>
            </div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            {article.img && (
              <div className={styles.imageContainer}>
                <Image src={`/${article.img}`} alt="yuriiblog" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <div className={styles.detail}>
                <span className={styles.date}>{formattedDate} </span>
                <span className={styles.category}>- {article.catSlug}</span>
              </div>
              <Link href={`/posts/${article.slug}`}>
                <h1>{article.title}</h1>
              </Link>
              <p className={styles.description}>
                {article.description.substring(0, 120)}...
              </p>
              <Link className={styles.link} target="blank" href={`/posts/${article.slug}`}>Read more</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
