import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = (props: any) => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  return (
    <header>
      <nav>
        <div className="brand">Task</div>
        {props.auth ? renderAuth() : renderUnAuth()}
      </nav>
      <div className="bars" onClick={operateNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

const renderAuth = () => {
  return (
    <div className="links">
      <Link to={"/"}>Dashboard</Link>
      <Link to={"/"}>Settings</Link>
      <Link to={"/"}>Account</Link>
    </div>
  );
};

const renderUnAuth = () => {
  return (
    <div className="links">
      <Link to={"/"} className="btn">
        Login
      </Link>
      <Link to={"/"} className="btn btn-secondary">
        Sign Up
      </Link>
    </div>
  );
};

const operateNav = (e: any) => {
  e.preventDefault();
  const links = document.querySelector(".links");
  console.log(links);
  links?.classList.toggle("active");
};

export default Navbar;
