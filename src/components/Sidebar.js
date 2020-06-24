import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="dash--aside">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/articles"}>News</NavLink>
        </li>
        <li>
          <NavLink to={"/category/events"}>Events</NavLink>
        </li>
        <li>
          <NavLink to={"/category/resources"}>Resources</NavLink>
        </li>
        <li>
          <NavLink to={"/category/guidance"}>Guidance</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
