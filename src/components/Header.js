import React from "react";
import logo from "../assets/img/book.gif";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="container containerTop">
      <nav className="navbar navbar-light bg-light rounded-4 border border-3">
        <div className="container-fluid d-flex justify-content-center m-5">
          <div className="img-containter m-1">
            <img src={logo} alt="book" />
          </div>
          <div>
            <h1 className="text-muted border-bottom">Gokhan`s PhoneBook</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
