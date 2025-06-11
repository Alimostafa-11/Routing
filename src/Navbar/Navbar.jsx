import React from "react";
import { Link } from "react-router-dom";
import StartFramework from "../StartFramework/StartFramework";
import Portfolio from "../Portfolio/Portfolio";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="container">
          <li>
            <Link className="logo" to="startFramework">
              Start Framework
            </Link>
          </li>
          <li>
            <Link className="active" to="about">
              about
            </Link>
            <Link className="active" to="portfolio">
              portfolio
            </Link>
            <Link className="active" to="contact">
              contact
            </Link>
            <Link className="active" to="apicall">
              Api
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
