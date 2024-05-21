"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div style={
      theme === "dark"
        ? { backgroundColor: "white" }
        : { backgroundColor: "#0f172a" }
    } 
      className={styles.container} 
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
}
