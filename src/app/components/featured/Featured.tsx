import styles from "./featured.module.css"
import {Image} from "@nextui-org/react";

export function Featured() {
  return (
    <div className={styles.container}>
		  <h1 className={styles.title}>
        <b>Hey, Yurii dev here!</b> Discover my stories and creative ideas.
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
   
        <Image
            src="/home__photo.png"
            alt="blog"
            isZoomed
            className={`${styles.image}`}
        />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
          <p className={styles.postDescription}>
          Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently versions of Lorem Ipsum
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
