import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [isDark, setIsDark] = useState(false);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shope">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
