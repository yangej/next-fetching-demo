import { getUsers } from "~/utils/apis";
import UserCard from "../common/UserCard";
import styles from "./view.module.css";

const UserView = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            name={user.name}
            company={user.company.name}
            phone={user.phone}
            email={user.email}
          />
        );
      })}
    </div>
  );
};
export default UserView;
