'use client'

import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import {Pagination} from "@nextui-org/react";
import { useEffect } from "react";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean; 
  totalPages: number;
}


export function MyPagination({ page, setPage, totalPages }: PaginationProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof page === "string" && !isNaN(parseInt(page))) {
      setPage(parseInt(page));
    }
  }, [page, setPage]);

  const handleChange = (value: number) => {
    setPage(value);
    router.push(`?page=${value}`);
  };

  return (
    <div className={styles.container}>
      <Pagination
        onChange={handleChange}
        total={totalPages}
        initialPage={page} 
      />
    </div>
  );
}