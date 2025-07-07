import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", price: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/books", { ...form, price: parseInt(form.price) });
      navigate("/");
    } catch {
      alert("Failed to add");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <input name="title" onChange={handleChange} placeholder="Title" required /><br />
      <input name="author" onChange={handleChange} placeholder="Author" required /><br />
      <input name="price" type="number" onChange={handleChange} placeholder="Price" required /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;
