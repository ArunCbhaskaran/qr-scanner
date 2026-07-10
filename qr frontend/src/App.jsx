import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Resultpage from "./pages/Resultpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/result" element={<Resultpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
