import styles from "./card.module.css";

interface Props {
  title: string;
  userId: number;
}
const AlbumCard = ({ title, userId }: Props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.name}>User - {userId}</p>
    </div>
  );
};
export default AlbumCard;
