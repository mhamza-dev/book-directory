import { Fragment, useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";
import userStore from "../../store/userStore";
import useFetchUsers from "../../hooks/useFetchUsers";

function UserMain() {
  useFetchUsers();
  const { users, updateUsersList } = userStore();

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      updateUsersList(users.filter((user) => user.id !== id));
    } catch (error: any) {
      if (isAxiosError(error)) {
        alert(error.message);
      }
    }
  };
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Users</h1>
        <div className="d-flex justify-content-end">
          <UserForm />
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </div>
    </Fragment>
  );
}

export default UserMain;
