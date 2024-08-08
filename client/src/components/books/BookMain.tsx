import { Fragment, useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import userStore from "../../store/userStore";
import useFetchUsers from "../../hooks/useFetchUsers";
import useFetchBooks from "../../hooks/useFetchBooks";
import bookStore from "../../store/bookStore";
import axios, { isAxiosError } from "axios";

function BookMain() {
  useFetchUsers();
  useFetchBooks();
  const { users } = userStore();
  const { books, updateBooksList } = bookStore();
  const deleteBook = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/books/${id}`);
      updateBooksList(books.filter((book) => book.id !== id));
    } catch (error: any) {
      if (isAxiosError(error)) {
        alert(error.message);
      }
    }
  };
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center">Books</h1>
        <div className="d-flex justify-content-end">
          <BookForm users={users} />
        </div>
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </Fragment>
  );
}

export default BookMain;
