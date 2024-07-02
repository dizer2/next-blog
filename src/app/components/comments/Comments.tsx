"use client";
import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Skeleton } from '@nextui-org/react';

type Comment = {
  id: string;
  createdAt: string;
  description: string;
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

export default function Comments({ postSlug }: { postSlug: string }) {
  const { status } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (postSlug: string) => {
    try {
      const res = await fetch(`/api/comments?postSlug=${postSlug}`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(postSlug);
  }, [fetchData, postSlug]);

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, postSlug }),
      });

      if (!res.ok) {
        throw new Error('Failed to post comment');
      }

      setDescription('');
      setLoading(true);
      await fetchData(postSlug);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder='Write a comment...'
            className={styles.input}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <Button color='primary' onClick={handleSubmit} className={styles.button}>
            Send
          </Button>
        </div>
      ) : (
        <Link href='/login'>Login to comment</Link>
      )}

      <div className={styles.comments}>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={`${styles.comment} ${styles.commentSkeleton}`}>
              <Skeleton className={styles.skeletonImage} />
              <div className={styles.userSkeleton}>
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextFull}`} />
                <Skeleton className={`${styles.skeletonText} ${styles.skeletonTextFull}`} />

              </div>
            </div>
          ))
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.user}>
                {comment.user?.image && (
                  <Image
                    src={comment.user.image}
                    alt='userImage'
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{comment.user.name}</span>
                  <span className={styles.date}>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className={styles.description}>{comment.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
