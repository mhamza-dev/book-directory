import axios from "axios";
import { useEffect } from "react";
import bookStore from "../store/bookStore";

const useFetchBooks = () => {
    const { updateBooksList } = bookStore();
    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/books");
            updateBooksList(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);
}

export default useFetchBooks
