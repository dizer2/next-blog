'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push('/');
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className={styles.loading}>Loading...</div>
    );
  }

  if (typeof window !== 'undefined' && status === "authenticated") {
    return null; // Prevent rendering on server side
  }

  return (
    <>
      {session ? (
        <>
          <h1>Welcome, {session.user?.name}</h1>
          <div onClick={() => signOut()} className={styles.socialButton}>Sign out</div>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div onClick={() => signIn('google')} className={styles.socialButton}>Sign in with Google</div>
              <div onClick={() => signIn('github')} className={styles.socialButton}>Sign in with Github</div>
              <div onClick={() => signIn('facebook')} className={styles.socialButton}>Sign in with Facebook</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
