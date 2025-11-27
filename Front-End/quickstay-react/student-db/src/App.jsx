import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Database from "./pages/DataBase";
import Demo from "./pages/Demo";
import RegisterPage from "./pages/RegisterPage";
import Inquiry from "./pages/Inquiry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/database" element={<Database />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
