import { CardList } from "../components/cardList/CardList";
import { Menu } from "../components/Menu/Menu";
import styles from "./blogPage.module.css"

export default function BlogPage({ searchParams}: any) {
  const initialPage  = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}</h1>
	    <div className={styles.content}>
        <CardList initialPage={initialPage} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
}
