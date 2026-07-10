import { useNavigate } from "react-router-dom";
import { Scanner } from "@yudiel/react-qr-scanner";

function ScannerPage({ onClose }) {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 py-10">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-purple-900/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Scan QR Code</h2>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm bg-white/10 hover:bg-white/20 text-purple-300 rounded-lg transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

        <div className="rounded-xl overflow-hidden mb-6">
          <Scanner
            onScan={(detectedCodes) => {
              if (detectedCodes && detectedCodes.length > 0) {
                navigate(`/result?data=${encodeURIComponent(detectedCodes[0].rawValue)}`);
              }
            }}
            onError={(error) => {
              console.log(error);
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default ScannerPage;