import Image from "next/image";
import styles from "./footer.module.css"
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={`shadow-lg shadow-blue-500/50 ${styles.imgBlock}`}>
            <Image className={styles.logoImg}  src="/logo.svg" alt="yurii blog" width={50} height={50} />
          </div>
          <h1 className={styles.logoText}>Yurii Tovarnytskyi</h1>
        </div>

        <div className={styles.line}></div>


        <div className={styles.social}>
          <Link target="_blank" href="https://t.me/Yurlok" className={`shadow-lg shadow-blue-500/50 ${styles.social__block}`}>
            <Image src="/telegram.svg" alt="telegram" width={50} height={50}/>
          </Link>
          <Link target="_blank" href="https://api.whatsapp.com/send/?phone=%2B420773203868&text&type=phone_number&app_absent=0" className={`shadow-lg shadow-blue-500/50 ${styles.social__block}`}>
            <Image src="/whatsaap.svg" alt="telegram" width={50} height={50}/>
          </Link>
          <Link target="_blank" href="mailto:pushokv165@gmail.com" className={`shadow-lg shadow-blue-500/50 ${styles.social__block}`}>
            <Image src="/gmail.svg" alt="telegram" width={50} height={50}/>
          </Link>
        </div>
       
     
      </div>

    </div>
  );
}
