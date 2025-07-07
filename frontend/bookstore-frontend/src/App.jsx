import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Books /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<ProtectedRoute><AddBook /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
