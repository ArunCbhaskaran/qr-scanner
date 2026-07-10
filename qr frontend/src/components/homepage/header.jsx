import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
      <h1 className="text-2xl font-bold text-white">
        QR <span className="text-purple-400">Scanner</span>
      </h1>
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-purple-300/70 text-sm">
            Hi, {user.username || user.email}
          </span>
        )}
        <button
          onClick={user ? handleLogout : () => navigate("/login")}
          className="px-5 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all duration-300 shadow-lg shadow-purple-600/25 cursor-pointer"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}

export default Header;