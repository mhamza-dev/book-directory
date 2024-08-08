import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BookMain from "./components/books/BookMain";
import ErrorPage from "./components/ErrorPage";
import UserDetail from "./components/users/UserDetail";
import UserMain from "./components/users/UserMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserMain />,
  },
  {
    path: "users/:userId",
    element: <UserDetail />,
  },
  {
    path: "/books",
    element: <BookMain />,
  },
  {
    path: "/books/:bookId",
    element: <BookMain />,
  },
]);

export default router