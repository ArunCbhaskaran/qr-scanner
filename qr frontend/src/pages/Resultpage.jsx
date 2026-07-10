import { useSearchParams, useNavigate } from "react-router-dom";

function Resultpage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const data = params.get("data") || "";
  const isUrl = data.startsWith("http://") || data.startsWith("https://");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 max-w-lg w-full text-center shadow-2xl shadow-purple-900/20">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Scan Result</h2>
          <p className="text-purple-300/50 text-sm mb-6">QR code scanned successfully</p>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5 mb-6">
            <p className="text-white text-sm break-all">{data}</p>
          </div>

          <div className="flex gap-3">
            {isUrl && (
              <a
                href={data}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/25 text-center"
              >
                Open Link
              </a>
            )}
            <button
              onClick={() => navigate("/")}
              className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10 font-medium rounded-xl transition-all duration-300 cursor-pointer"
            >
              Scan Again
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resultpage;
