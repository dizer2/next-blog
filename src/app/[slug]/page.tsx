import { Menu } from "../components/Menu/Menu";
import styles from "./singlePage.module.css"

export default function SinglePage() {
  return (
    <div className={styles.container}>
		<div className={styles.infoContainer}></div>
		<div className={styles.content}>
			<div className={styles.post}></div>
			<Menu />
		</div>
    </div>
  );
}
