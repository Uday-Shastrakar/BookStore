import { useEffect, useState } from "react";
import api from "../services/api";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Book List</h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded p-4 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-green-600 font-medium mt-1">₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
