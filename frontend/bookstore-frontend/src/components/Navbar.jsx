import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Bookstore</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Books</Link>
        {isLoggedIn && (
          <Link to="/add" className="hover:underline">Add Book</Link>
        )}
        {!isLoggedIn && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="hover:underline bg-transparent border-none"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
