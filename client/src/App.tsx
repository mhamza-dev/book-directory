import { Fragment, useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError, isAxiosError } from "axios";
import { User } from "./types/user";
import UserForm from "./components/users/UserForm";
import UserList from "./components/users/UserList";
import { Link } from "react-router-dom";

function App() {
  

  return (
    <Fragment>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to={`/users`}>Users</Link>
          </li>
          <li className="list-group-item">
            <Link to={`/books`}>Books</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
