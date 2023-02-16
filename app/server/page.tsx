import styles from "./page.module.css";
import { getAlbums, getUsers } from "~/utils/apis";
import AlbumView from "~/components/server/AlbumView";
import { Suspense } from "react";
import UserView from "~/components/server/UserView";
import Link from "next/link";

/** NOTE:
 * Revalidation features only work at production build.
 */
export const revalidate = 10;

export default async function ServerPage() {
  getAlbums();
  getUsers();

  return (
    <main className={styles.main}>
      <Link href="/">Back to Home Page</Link>
      <Suspense fallback={<div>Loading Albums...</div>}>
        {/** NOTE:
         * Server Components are now not recognized by TypeScript,
         * See issue: https://github.com/vercel/next.js/issues/42292#issuecomment-1298459024
         */}
        {/* @ts-expect-error Server Component */}
        <AlbumView />
      </Suspense>
      <Suspense fallback={<div>Loading Users...</div>}>
        {/* @ts-expect-error Server Component */}
        <UserView />
      </Suspense>
    </main>
  );
}
