import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../Feedback/Feedback";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <Logo />
      </Link>
      <Searchbar placeholder={"Search a album of your choice"} />
      <Feedback text={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
