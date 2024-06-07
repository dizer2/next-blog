'use client'

import { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean; 
}

export function MyPagination({ page, setPage, loading }: PaginationProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <MuiPagination className={styles.buttons} count={10} shape="rounded" color="primary"variant="outlined" page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
