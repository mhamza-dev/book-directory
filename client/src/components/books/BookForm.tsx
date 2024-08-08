import axios from "axios";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { User } from "../../types/user";
interface Props {
    users: User[]
}
function BookForm({users}: Props) {
  const [values, setValues] = useState({});

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const createUser = async (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post<User, Error>("http://localhost:8080/books", values, {
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = "/books";
    } catch (error: any) {
      console.log(typeof error);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#createUser"
      >
        Create Book
      </button>

      <div
        className="modal fade"
        id="createUser"
        tabIndex={-1}
        aria-labelledby="createUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createUserLabel">
                Create Book
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => createUser(e)}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title of the Book"
                  className="form-control mb-2"
                  onChange={(e) => handleInputs(e)}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description of the Book"
                  className="form-control mb-2"
                  onChange={(e) => handleInputs(e)}
                />
                <select
                  name="userId"
                  className="form-select"
                  onChange={(e) => handleSelect(e)}
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.email}
                    </option>
                  ))}
                </select>
                <div className="d-flex mt-4 justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary ms-2">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BookForm;
