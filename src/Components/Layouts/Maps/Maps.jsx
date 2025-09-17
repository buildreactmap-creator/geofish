import "./Maps.css";
import paths from "../../../assets/data/Maps.json";
import { useState } from "react";

export default function Maps({ dataMaps }) {
  const width = 500;
  const height = 375;

  const [transform, setTransform] = useState("translate(0, 0) scale(1)");
  const [transisi, setTransition] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [nameEnter, setNameEnter] = useState("Provinsi Kalimantan Timur");

  const focusOn = (event) => {
    const bounds = event.getBBox();
    const padding = 25;
    const x0 = bounds.x - padding;
    const x1 = bounds.x + bounds.width + padding;
    const y0 = bounds.y - padding;
    const y1 = bounds.y + bounds.height + padding;

    const scale = 1 / Math.max((x1 - x0) / width, (y1 - y0) / height);
    const translateX = width / 2 - (scale * (x0 + x1)) / 2;
    const translateY = height / 2 - (scale * (y0 + y1)) / 2;

    setTransform(`translate(${translateX},${translateY}) scale(${scale})`);
    setTransition("all " + (1 + scale / 10) + "s");
  };

  const setReset = document.querySelectorAll(".path");
  const reset = (e) => {
    setTransform("translate(0, 0) scale(1)");
    setTransition("all 500ms ease");
    setSelectedId(null);
    dataMaps(false);
    setReset.forEach((a) => a.classList.remove("active"));
  };

  const handlePathClick = (e) => {
    e.stopPropagation(); // cegah onClick svg ikut terpanggil
    const id = e.currentTarget.id || e.currentTarget.dataset.id || null;

    // console.log(selectedId);
    setReset.forEach((a) => {
      if (id && id === selectedId) {
        // klik path yang sama -> kembali ke tampilan awal
        reset();
      } else {
        // fokus ke path yang baru di-klik
            // lebih dulu lakukan clearing active
        if (a.classList.contains("active")) {
          a.classList.remove("active");
        }
            // Kemudian Tambahakan Active
        e.currentTarget.classList.add("active");

            // setting state yang dibutuhkan
        setSelectedId(id);
        focusOn(e.currentTarget);
        dataMaps(id);
      }
    });
  };

  const handleSvgClick = () => {
    // klik di luar path -> reset
    reset();
  };

  const enterName = (e) => {
    setNameEnter(e.currentTarget.id);
  };

  return (
    <div className="card__map">
      <svg
        version="1.1"
        id="Layer_1"
        className="svg__map"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 500 375"
        xmlSpace="preserve"
        onClick={handleSvgClick}
      >
        <title>{nameEnter}</title>
        <g
          className="global__transform"
          transform={transform}
          style={{ transition: transisi }}
        >
          <g
            className="group__path"
            transform="matrix(0.999751,0,0,0.999751,0,0)"
          >
            {paths.map((c) => {
              return (
                <path
                  className="path"
                  key={c.id}
                  id={c.name}
                  d={c.path}
                  onClick={handlePathClick}
                  onMouseEnter={enterName}
                  onMouseOut={() => {
                    setNameEnter("Provinsi Kalimantan Timur");
                  }}
                />
              );
            })}
          </g>
          <g
            className="group__line"
            transform="matrix(0.999751,0,0,0.999751,0,0)"
          >
            {paths.map((l) => {
              return (
                <path className="line" key={l.id} d={l.path} name={l.name} />
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
