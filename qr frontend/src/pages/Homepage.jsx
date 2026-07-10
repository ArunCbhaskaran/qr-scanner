import { useState } from "react";
import Header from "../components/homepage/header";
import Body from "../components/homepage/body";
import Footer from "../components/homepage/footer";
import ScannerPage from "../components/scanner/scanner";

function Homepage() {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950">
      <Header />
      {showScanner ? (
        <ScannerPage onClose={() => setShowScanner(false)} />
      ) : (
        <Body onScan={() => setShowScanner(true)} />
      )}
      <Footer />
    </div>
  );
}

export default Homepage;