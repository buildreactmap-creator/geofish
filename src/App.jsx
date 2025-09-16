import { useState } from "react";
import "./App.css";
import Pdb from "./Components/Pages/PdbContent/Pdb";
import AppContent from "./Components/Pages/Content/AppContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { items } from "./Components/Provider/NavbarProvider";
import Navbar from "./Components/Layouts/Navbar/Navbar";

function App() {
  const [isCloseAside, setCloseAside] = useState(true);

  return (
    <BrowserRouter>
      <Navbar isCloseAside={isCloseAside} setCloseAside={setCloseAside} />
      <div className={`main-content ${isCloseAside ? "collapse" : ""}`}>
        <Routes>
          <Route path="/geofish" element={<AppContent />} />
          <Route path="/geofish/pdb-perikanan" element={<Pdb />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
