import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/books", { ...form, price: parseInt(form.price) });
      navigate("/");
    } catch {
      alert("Failed to add");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Book</h2>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          name="author"
          onChange={handleChange}
          placeholder="Author"
          required
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          name="price"
          type="number"
          onChange={handleChange}
          placeholder="Price"
          required
          className="w-full mb-4 p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
