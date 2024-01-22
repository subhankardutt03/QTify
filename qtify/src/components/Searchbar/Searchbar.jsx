import React from "react";
import styles from "./Searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search_icon.svg";

const Searchbar = ({ placeholder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.search}
          required
        />
        <button className={styles.searchBtn} type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default Searchbar;
