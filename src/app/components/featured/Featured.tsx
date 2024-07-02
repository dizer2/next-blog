import styles from "./featured.module.css"
import {Image} from "@nextui-org/react";

export function Featured() {
  return (
    <div className={styles.container}>
      <Image
          src="/home__photo.png"
          alt="blog"
          isZoomed
          className={`${styles.image}`}
      />
		  <h1 className={styles.title}>
      <b>Hey, Yurii dev here!</b> Explore my stories or create your own article to share with the community.</h1>
    </div>
  );
}
