'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./login.module.css";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
	console.log(session);
	console.log(session.user?.email);
	console.log(session.user?.image);
	console.log(session.user?.name);
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
              <div onClick={() => signIn('facebook')} className={styles.socialButton}>Sign in with Github</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
