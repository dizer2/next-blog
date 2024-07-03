'use client';


import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
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
import { Button, Select, SelectItem } from "@nextui-org/react";
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WritePage() {
  const router = useRouter();
  const [category] = useState([
    { label: "fashion", value: "fashion" },
    { label: "culture", value: "culture" },
    { label: "coding", value: "coding" },
    { label: "style", value: "style" },
    { label: "travel", value: "travel" },
    { label: "food", value: "food" },
  ]);
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
    if (!title.trim() || !value.trim()) {
      alert("Please fill out both the title and description fields.");
      return;
    }
    
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
    const selectedFile = e.target.files?.[0];
  
    if (!selectedFile) {
      return;
    }
  
    if (!selectedFile.type.startsWith('image/')) {
      alert('Please upload an image file.');
      e.target.value = '';
    }
  
    setFile(selectedFile);
  };
  
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Write title for article"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <div className={styles.editor}>
        {typeof window !== 'undefined' && (
          <ReactQuill
            theme="bubble"
            className={styles.textArea}
            value={value}
            onChange={setValue}
            placeholder="Describe your article"
          />
        )}
      </div> */}

      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <Button
        className={styles.photo}
        color="secondary"
        variant="shadow"
      >
        <label className="flex items-center justify-center gap-3 text-white font-medium text-lg	" htmlFor="image">
          <Image src="/camera.svg" alt="camera" width={30} height={30} />
          Upload photo
        </label>
      </Button>

      <div className={styles.buttons}>
        <Select
          items={category}
          color="success"
          label="Category"
          placeholder="Select category"
          className="max-w-xs"
          onChange={(e) => setCatSlug(e.target.value)}
        >
          {(animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          )}
        </Select>
        <Button
          className={styles.publish}
          onClick={handleSubmit}
          color="success"
          variant="shadow"
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
