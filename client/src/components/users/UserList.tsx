import { Fragment } from "react";
import { User } from "../../types/user";

interface Props {
  users: User[];
  deleteUser: (id: number) => void;
}

function UserList({ users, deleteUser }: Props) {
  const userDetail = (id: number) => {
    window.location.href = `/users/${id}`;
  };
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row" role="button" onClick={() => userDetail(user.id)}>
                {index + 1}
              </th>
              <td role="button" onClick={() => userDetail(user.id)}>
                {user.firstName}
              </td>
              <td role="button" onClick={() => userDetail(user.id)}>
                {user.lastName}
              </td>
              <td role="button" onClick={() => userDetail(user.id)}>
                {user.email}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default UserList;
