'use client'

import { use } from "react";
import { getUsers } from "~/utils/apis";
import UserCard from "../common/UserCard";
import styles from "./view.module.css";

const userPromise = getUsers();

const UserView = () => {
  const users = use(userPromise);

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
