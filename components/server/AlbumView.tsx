import { getAlbums } from "~/utils/apis";
import AlbumCard from "../common/AlbumCard";
import styles from "./view.module.css";

export default async function AlbumView() {
  const albums = await getAlbums();

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
