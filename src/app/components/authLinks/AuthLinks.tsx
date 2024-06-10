'use client'

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

export function AuthLinks() {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <>
      {status === "authenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link className={styles.link} href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>

      {open && (
        <div className={styles.resposiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
