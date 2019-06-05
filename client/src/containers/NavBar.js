import React from 'react'

import { Link } from "react-router-dom";

const NavBar = () => (
  <ul className="nav-bar">
    <li>
      <Link className="link" to="/">Explore Artworks</Link>
    </li>
    <li>
      <Link className="link" to="/about">About Tags</Link>
    </li>
  </ul>
);

export default NavBar;
