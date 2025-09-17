import { useState } from "react";
import errSvg from "../../../assets/Error-Illustration.svg";

export default function Produksi() {
  return (
    <div className="pengembangan">
      <h3>Halaman ini masih dalam pengembangan ......</h3>

      <img src={errSvg} alt="my error SVG" width="60%" />
    </div>
  );
}
