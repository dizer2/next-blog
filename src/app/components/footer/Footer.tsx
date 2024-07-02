import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={`shadow-lg shadow-blue-500/50 ${styles.imgBlock}`}>
            <Image  src="/logo.svg" alt="yurii blog" width={50} height={50} />
          </div>
          <h1 className={styles.logoText}>Yurii Tovarnytskyi</h1>
        </div>


        <div className={styles.social}>
          <Link href="/" className={styles.social__block}>
            <Image src="/telegram.svg" alt="telegram" width={50} height={50}/>
          </Link>
          <Link href="/" className={styles.social__block}>
            <Image src="/whatsaap.svg" alt="telegram" width={50} height={50}/>
          </Link>
          <Link href="/" className={styles.social__block}>
            <Image src="/gmail.svg" alt="telegram" width={50} height={50}/>
          </Link>
        </div>
       
     
      </div>

    </div>
  );
}
