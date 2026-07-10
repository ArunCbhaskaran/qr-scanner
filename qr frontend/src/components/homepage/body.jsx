import { useNavigate } from "react-router-dom";

function Body({ onScan }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-10 sm:py-20">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 max-w-lg w-full text-center shadow-2xl shadow-purple-900/20">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400"
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

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
          QR Code Scanner
        </h2>
        <p className="text-purple-300/60 text-sm sm:text-base mb-6 sm:mb-8">
          Scan QR codes instantly
        </p>

        {user ? (
          <button onClick={onScan} className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25 cursor-pointer">
            Scan QR
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25 cursor-pointer"
          >
            Login to Get Started
          </button>
        )}
      </div>
    </main>
  );
}

export default Body;