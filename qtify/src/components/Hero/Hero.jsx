import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as HeroImg } from "../../assets/hero_image.svg";

const Hero = ({ text1, text2 }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.hero_text}>
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
          <HeroImg className={styles.hero_image} />
        </div>
      </div>
    </>
  );
};

export default Hero;
