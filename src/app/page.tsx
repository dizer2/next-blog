import styles from './home.module.css'
import { Featured } from "./components/featured/Featured";
import { CategoryList } from "./components/categoryList/CategoryList";
import { CardList } from "./components/cardList/CardList";
import { Menu } from "./components/Menu/Menu";
import LoginPage from './login/page';

export default function Home({ searchParams}: any) {
  const initialPage  = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />

      <div className={styles.content}>
        <CardList initialPage={initialPage}/>
        <Menu />
      </div>
    </div>
  );
}
