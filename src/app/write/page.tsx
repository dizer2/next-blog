"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./write.module.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../utils/firebase";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");

  const storage = getStorage(app);

  useEffect(() => {
    const upload = () => {
      if (!file) return;

      const name = `${new Date().getTime()}_${file.name}`;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error("Upload failed", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            console.log(downloadURL);
            console.log("File available at", downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file, storage]);

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    console.log(media);
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            className="icon"
            src="/plus.svg"
            alt="icon"
            width={16}
            height={16}
          />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.svg" alt="icon" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.svg" alt="icon" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.svg" alt="icon" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          className={styles.textArea}
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
}
