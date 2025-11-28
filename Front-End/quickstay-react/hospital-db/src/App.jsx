import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Database from "./Pages/Database.jsx";
import Admit from "./Pages/Admit.jsx";
import Update from "./Pages/Update.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<Database />} />
        <Route path="/admit" element={<Admit />} />
        <Route path="/discharge" element={<Discharge />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
