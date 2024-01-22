import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Feedback from "../Feedback/Feedback";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* <a href="/" className={styles.navbar_links}> */}
      <Logo />
      <Searchbar placeholder={"Search a album of your choice"} />
      <Feedback text={"Give Feedback"} />
      {/* </a> */}
    </nav>
  );
};

export default Navbar;
