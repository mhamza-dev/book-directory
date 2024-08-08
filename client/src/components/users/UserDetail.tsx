import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "../../types/user";
import ErrorPage from "../ErrorPage";

function UserDetail() {
  const [user, setUser] = useState<User | null>(null);
  const { userId } = useParams();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      setUser(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <Fragment>
      {user ? (
        <div className="container">
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.firstName + user.lastName}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user.email}
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {user.books.map((book) => (
                  <Link className="card-link" to={`/books/${book.id}`}>
                    {book.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default UserDetail;
