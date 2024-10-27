import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburguer } from "./MenuHamburguerStyles";
import Barras from '../../public/img/barras.svg';

interface MenuHamburgerProps {
  routes: { path: string; label: string }[];
}
const MenuHamburger: React.FC<MenuHamburgerProps> = ({ routes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-button">
      <button onClick={toggleMenu} className="barras">
        <img src={Barras} alt="Menu" />
      </button>
      {menuOpen && (
        <Hamburguer className="menu-hamburguer">
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </Hamburguer>
      )}
    </div>
  );
};

export default MenuHamburger;