import { create} from 'zustand'
import { Book } from '../types/book'
 interface BookStore {
    books: Book[],
    updateBooksList: (books: Book[]) => void,
 }
const bookStore = create<BookStore>((set) => ({
  books: [],
  updateBooksList: (books: Book[]) => set(() => ({ books })),
}));

export default bookStore