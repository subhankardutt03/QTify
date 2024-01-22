import React from "react";
import styles from "../Feedback/Feedback.module.css";

const Feedback = ({ text }) => {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
};

export default Feedback;
