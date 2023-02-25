import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/StockTires"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Stock pneus</li>
        </NavLink>
        <NavLink
          to="/ListVehicles"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Liste de véhicules</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
