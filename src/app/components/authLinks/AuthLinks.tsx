'use client'

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

export function AuthLinks() {
  const [open, setOpen] = useState<boolean>(false);
  const [statusLogin, setStatusLogin] = useState<boolean>(false);
  const { status } = useSession();
 
  return (
    <>
      {status === "authenticated" ? (
        <>
          <Link className={styles.link} href="/write">Write</Link>
          <span  onClick={() => signOut()} className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login">Login</Link>
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
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span onClick={() => signOut()} className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
