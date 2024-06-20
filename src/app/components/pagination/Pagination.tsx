'use client'

import { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean; 
  totalPages: number;
}

export function MyPagination({ page, setPage, totalPages }: PaginationProps) {
  const router = useRouter();
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(`?page=${value}`);
  };

  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <MuiPagination
          className={styles.buttons}
          count={totalPages}
          shape="rounded"
          color="primary"
          variant="outlined"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
