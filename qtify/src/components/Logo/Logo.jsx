import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={LogoImage} alt="logo" />;
};

export default Logo;
