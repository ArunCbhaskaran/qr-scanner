import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const url = isLogin
      ? "http://localhost:3000/user/login"
      : "http://localhost:3000/user/register";

    const body = isLogin
      ? { email: form.email, password: form.password }
      : { username: form.username, email: form.email, password: form.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        if (isLogin && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          setTimeout(() => navigate("/"), 1000);
        }
        if (!isLogin) {
          setTimeout(() => setIsLogin(true), 1500);
        }
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-8 shadow-2xl shadow-purple-900/20">
          {/* QR Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 14.625v1.5a1.125 1.125 0 001.125 1.125h1.5m3.375-3.375v4.5c0 .621-.504 1.125-1.125 1.125h-4.5"
              />
            </svg>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-1">
            QR <span className="text-purple-400">Scanner</span>
          </h1>
          <p className="text-center text-purple-300/50 text-sm mb-7">
            {isLogin ? "Welcome back" : "Create your account"}
          </p>

          {/* Toggle */}
          <div className="flex bg-white/5 rounded-xl p-1 mb-7 border border-white/10">
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setMessage("");
              }}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                !isLogin
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "text-purple-300/60 hover:text-white"
              }`}
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setMessage("");
              }}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                isLogin
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                  : "text-purple-300/60 hover:text-white"
              }`}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm text-purple-200/70 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Enter username"
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-purple-200/70 mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm text-purple-200/70 mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/30 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Min 8 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="mt-5 text-center text-sm text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-lg py-2.5">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
