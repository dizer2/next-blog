'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

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
    return null; 
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
          <div className={`${styles.container}`}>
            <div className={styles.wrapper}>
            <div onClick={() => signIn('facebook')} className={styles.socialButton}>
              <Image src="/fasebook.svg" alt="fasebook" width={24} height={24}/>
              <span>Sign in with Facebook</span>
            </div>
            <div onClick={() => signIn('facebogoogleok')} className={styles.socialButton}>
              <Image src="/google.svg" alt="fasebook" width={24} height={24}/>
              <span>Continue with Google</span>
            </div>
            <div onClick={() => signIn('github')} className={styles.socialButton}>
              <Image src="/github.svg" alt="fasebook" width={24} height={24}/>
              <span>Continue with GitHub</span>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
