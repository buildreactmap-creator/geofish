import { useState } from "react";
import logo from "../../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router";
import { items } from "../../Provider/NavbarProvider";

// ==== icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default function Navbar({ isCloseAside, setCloseAside }) {
  const handleClose = () => {
    setCloseAside(!isCloseAside);
  };

  return (
    <nav className={`navbar ${isCloseAside ? "close" : ""}`}>
      <div className="nav__container">
        <div className="nav__header">
          <img className="nav__logo" src={logo} alt="Kaltim-logo.png" />
        </div>
        <div className="navigation">
          <ul>
            {items.map((item) => (
              <li className="nav__list" key={item.id}>
                <Link to={item.path} hrefLang={item.href} className="nav__link">
                  <FontAwesomeIcon
                    icon={item.icons}
                    className="nav__link__logo"
                  />
                  <span className="nav__link__text">{item.title}</span>
                </Link>
              </li>
            ))}
            <li className="nav__list">
              <a href="https://dkp.kaltimprov.go.id/" className="nav__link">
                <FontAwesomeIcon
                  icon="fa-solid fa-share-from-square"
                  className="nav__link__logo"
                />
                <span className="nav__link__text">Back to Home</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="close__tag" onClick={handleClose}>
          <FontAwesomeIcon icon={isCloseAside ? "fa-solid fa-angles-right" : "fa-solid fa-angles-left"} />
        </div>
      </div>
    </nav>
  );
}
