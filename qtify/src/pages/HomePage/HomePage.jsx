import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <>
      <Hero
        text1={"100 Thousand Songs, ad-free"}
        text2={"Over thousands podcast episodes"}
      />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        {/* <Section title="Songs" data={songs} type="song" /> */}
      </div>
    </>
  );
};

export default HomePage;
