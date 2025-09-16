import "./Maps.css";
import { useRef, useState } from "react";
import MyMap from "../../../assets/myMap.svg?react";

export default function Maps({ dataMaps }) {
  const mapRef = useRef(null);

  const width = 841.8897705;
  const height = 595.2755737;

  const [transform, setTransform] = useState("translate(0, 0) scale(1)");
  const [transition, setTransition] = useState("all 1000ms ease");
  const [selectedId, setSelectedId] = useState(null);

  const [nameEnter, setNameEnter] = useState("Provinsi Kalimantan Timur");

  // fungsi fokus pada elemen <g>
  const focusOn = (element) => {
    const bounds = element.getBBox();
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

  const reset = () => {
    setTransform("translate(0, 0) scale(1)");
    setTransition("all 1000ms ease");
    setSelectedId(null);
    dataMaps(false);
  };

  const handlePathClick = (e) => {
    e.stopPropagation(); // cegah klik bubble ke svg
    const id = e.currentTarget.id || null;

    if (id && id === selectedId) {
      reset();
    } else {
      setSelectedId(id);
      focusOn(e.currentTarget);
      dataMaps(id);
    }
  };

  const handleSvgClick = () => {
    reset();
  };

  const enterName = (e) => {
    const title = e.currentTarget.getAttribute("title");
    setNameEnter(title);
  };
  return (
    <div className="card__map">
      <MyMap
        ref={mapRef}
        style={{ cursor: "pointer" }}
        onClick={handleSvgClick}
      />
      {mapRef.current &&
        (() => {
          const globalGroup =
            mapRef.current.querySelector(".global__transform");
          const setNameTitle = mapRef.current.querySelector(".title__name");
          setNameTitle.innerHTML = nameEnter;

          if (globalGroup) {
            globalGroup.setAttribute("transform", transform);
            globalGroup.style.transition = transition;

            const globalGroupPath = globalGroup.querySelector(
              ".global__group__path"
            );
            globalGroupPath.querySelectorAll("g[id]").forEach((g) => {
              g.onclick = handlePathClick;
              g.onmouseenter = enterName;
              g.onmouseout = () => {
                setNameEnter("Provinsi Kalimantan Timur");
              };
              if (g.id === selectedId) {
                g.classList.add("active");
              } else {
                g.classList.remove("active");
              }
            });
          }
        })()}
        
    </div>
  );
}
