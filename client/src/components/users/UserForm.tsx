import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { User } from "../../types/user";

function UserForm() {
    const [values, setValues] = useState({})

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
    const createUser = async (e: FormEvent) => {
      e.preventDefault();
      try {
        await axios.post<User, Error>("http://localhost:8080/users", values, {
          headers: { "Content-Type": "application/json" },
        });
        window.location.href = "/users";
      } catch (error: any) {
        alert(error.response.data.error);
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
        Create User
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
                Create User
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
                  name="firstName"
                  placeholder="First Name"
                  className="form-control mb-2"
                  onChange={(e) => handleInputs(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control mb-2"
                  onChange={(e) => handleInputs(e)}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control mb-2"
                  onChange={(e) => handleInputs(e)}
                />

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

export default UserForm