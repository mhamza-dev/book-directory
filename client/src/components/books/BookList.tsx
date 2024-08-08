import { Fragment } from 'react'
import { Book } from '../../types/book';
interface Props {
  books: Book[];
  deleteBook: (id: number) => void;
}
function BookList({ books, deleteBook }: Props) {
  const bookDetail = (id: number) => {
    window.location.href = `/books/${id}`;
  };
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <th scope="row" role="button" onClick={() => bookDetail(book.id)}>
                {index + 1}
              </th>
              <td role="button" onClick={() => bookDetail(book.id)}>
                {book.title}
              </td>
              <td role="button" onClick={() => bookDetail(book.id)}>
                {book.description}
              </td>
              <td role="button" onClick={() => bookDetail(book.id)}>
                {book.user.email}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => deleteBook(book.id)}
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

export default BookList