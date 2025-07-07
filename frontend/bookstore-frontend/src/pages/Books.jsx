import { useEffect, useState } from "react";
import api from "../services/api";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.map(book => (
        <div key={book.id}>
          <b>{book.title}</b> by {book.author} - ₹{book.price}
        </div>
      ))}
    </div>
  );
}

export default Books;
