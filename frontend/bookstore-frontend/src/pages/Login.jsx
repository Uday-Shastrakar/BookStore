// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import ParticlesComponent from "../components/ParticlesComponent";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Particle Background */}
      <ParticlesComponent />

      {/* Login Form */}
      <div className="absolute z-10 w-full max-w-md bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg text-white">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full mb-4 p-3 border border-gray-600 bg-gray-800 rounded text-white placeholder-gray-400"
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full mb-4 p-3 border border-gray-600 bg-gray-800 rounded text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
