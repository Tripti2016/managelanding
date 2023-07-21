"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
// import Hamburger from "../../../public/hamburger.svg";
// import Close from "../../../public/close.svg";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav>
        <div className="nav-left">
          <h1></h1>
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "open" : " "}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Product">Product</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/cummunity">Cummunity</Link>
          </li>
        </ul>
       
        <div className="nav-right btn-start">
          <button>Get Started</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
