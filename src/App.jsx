import { useState } from "react";
import "./App.css";
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
          {items.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
