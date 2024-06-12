'use client';

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import styles from "./write.module.css";

export default function WritePage() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image className="icon" src="/plus.svg" alt="icon" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.svg" alt="icon" width={16} height={16} />
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
      <button className={styles.publish}>Publish</button>
    </div>
  );
}
