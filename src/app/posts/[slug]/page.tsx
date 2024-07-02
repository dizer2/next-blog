"use client";

import Image from "next/image";
import styles from "./singlePage.module.css";
import Comments from "@/app/components/comments/Comments";
import { Menu } from "@/app/components/Menu/Menu";
import { useEffect, useState } from "react";
import "./single.css";
import { Button, Skeleton } from "@nextui-org/react";

export default function SinglePage({ params }: any) {
  const [singlePost, setSinglePost] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/posts/${params.slug}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        setSinglePost(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          {loading ? (
            <div className={styles.imageContainer}>
              <Skeleton className={styles.imgSkeleton}></Skeleton>
            </div>
          ) : (
            singlePost.img && (
              <div className={styles.imageContainer}>
                <Image
                  src={`${singlePost.img}`}
                  alt="Post Image"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
            )
          )}

          {loading ? (
            <div className={styles.skeletonAllText}>
              <Button color="primary" className={styles.skeletonVIew}>
                <Image src="/eye.svg" alt="eye" width={24} height={24} />
                <Skeleton className={styles.viewSkeleton}></Skeleton>
              </Button>
              <div className={styles.titleBox}>
                <Skeleton className={styles.titleSkeleton}></Skeleton>
                <Skeleton className={styles.titleSkeleton}></Skeleton>
                <Skeleton className={styles.titleSkeleton}></Skeleton>
              </div>
              <div className={styles.userSkeleton}>
                <div className={styles.userImageContainer}>
                  <Skeleton className={styles.userImgSkeleton}></Skeleton>
                </div>

                <div className={styles.userTextContainer}>
                  <span className={styles.username}>
                    <Skeleton className={styles.userTextSkeleton}></Skeleton>
                  </span>
                  <span className={styles.date}>
                    <Skeleton className={styles.userTextSkeleton}></Skeleton>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.allText}>
              <Button color="primary" className={styles.buttonViews}>
                <Image src="/eye.svg" alt="eye" width={24} height={24} />
                {singlePost.views}
              </Button>
              <h1 className={styles.title}>{singlePost.title}</h1>
              <div className={styles.user}>
                {singlePost.user?.image && (
                  <div className={styles.userImageContainer}>
                    <Image
                      src={singlePost.user.image}
                      alt="User Image"
                      width={50}
                      height={50}
                      className={styles.avatar}
                    />
                  </div>
                )}

                <div className={styles.userTextContainer}>
                  <span className={styles.username}>
                    {singlePost.user?.name}
                  </span>
                  <span className={styles.date}>
                    {new Date(singlePost.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {loading ? (
              <>
                <Skeleton className={styles.desriptionSkeleton}></Skeleton>
                <Skeleton className={styles.desriptionSkeleton}></Skeleton>
                <Skeleton className={styles.desriptionSkeleton}></Skeleton>
              </>
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: singlePost.description }}
              ></p>
            )}
          </div>
          <div className={styles.comment}>
            <Comments postSlug={params.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
