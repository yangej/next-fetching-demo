import styles from "./card.module.css";

interface Props {
    name: string;
    company: string;
    email: string;
    phone: string;
}
const UserCard = ({
    name, company, email, phone
}: Props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{company} - {name}</h3>
      <p className={styles.name}>{email}</p>
      <p className={styles.name}>{phone}</p>
    </div>
  );
};
export default UserCard;
