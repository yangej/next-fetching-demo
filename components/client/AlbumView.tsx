'use client'

import { use } from "react";
import { getAlbums } from "~/utils/apis";
import AlbumCard from "../common/AlbumCard";
import styles from "./view.module.css";

const albumPromise = getAlbums();

export default function AlbumView() {
  const albums = use(albumPromise);

  return (
    <div className={styles.container}>
      {albums.map((album) => {
        return (
          <AlbumCard key={album.id} title={album.title} userId={album.userId} />
        );
      })}
    </div>
  );
}
