import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="yurii blog" width={50} height={50} />
          <h1 className={styles.logoText}>Yuriiblog</h1>
        </div>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it book.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="fasebook" width={18} height={18}/>
          <Image src="/instagram.png" alt="fasebook" width={18} height={18}/>
          <Image src="/tiktok.png" alt="fasebook" width={18} height={18}/>
          <Image src="/youtube.png" alt="fasebook" width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listText}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listText}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listText}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}
