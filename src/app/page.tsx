import Link from "next/link";
import styles from './global.module.css'
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
