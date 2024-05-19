import Link from "next/link";
import styles from './global.module.css'

export default function Home() {
  return (
    <div>
      <Link href='/'>
        Hello
      </Link>
    </div>
  );
}
