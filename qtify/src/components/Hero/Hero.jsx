import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeroImg } from "../../assets/hero.svg";

const Hero = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <HeroImg className={styles.hero} />
      </div>
    </>
  );
};

export default Hero;
