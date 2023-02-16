'use client';

import styles from "./page.module.css";
import { getAlbums, getUsers } from "~/utils/apis";
import AlbumView from "~/components/client/AlbumView";
import UserView from "~/components/client/UserView";
import { Suspense } from "react";
import Link from "next/link";

export default function ClientPage() {
  getAlbums();
  getUsers();

  return (
    <main className={styles.main}>
      <Link href="/">Back to Home Page</Link>
      <Suspense fallback={<div>Loading Albums...</div>}>
        <AlbumView />
      </Suspense>
      <Suspense fallback={<div>Loading Users...</div>}>
        <UserView />
      </Suspense>
    </main>
  );
}
