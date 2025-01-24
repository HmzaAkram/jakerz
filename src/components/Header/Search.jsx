import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <div className="menu-items">
        <ul className="link f_flex capitalize">
          <li>
            <Link aria-label="Home" className="link-hover" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link aria-label="All Products" className="link-hover" to="/all-products">
              All Products
            </Link>
          </li>
          <li>
            <Link aria-label="Collection" className="link-hover" to="/collection">
              Collection
            </Link>
          </li>
          <li>
            <Link aria-label="Login" className="link-hover" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link aria-label="Registration" className="link-hover" to="/registration">
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const SearchWithNavbar = ({ cartItems }) => {
  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <Link aria-label="Home" to="/">
            <img src="/assets/main-logo/JACKERZ.png" alt="Logo" />
          </Link>
        </div>

        <Navbar />

        <div className="icon f_flex width">
          <Link aria-label="Login page" to="/login">
            <i className="fa fa-user icon-circle"></i>
          </Link>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchWithNavbar;
