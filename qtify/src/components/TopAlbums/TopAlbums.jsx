import React, { useEffect, useState } from "react";
import styles from "./TopAlbums.module.css";
import axios from "axios";
import Card from "../Card/Card";
import Grid from "@mui/material/Grid";

const TopAlbums = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        console.log("Top Albums data : ", response.data);
        setTopAlbums(response.data);
      } catch (e) {
        console.log("Error : ", e);
      }
    };
    fetchTopAlbums();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Top Albums</p>
        <p className={styles.collapse}>Collapse</p>
      </div>
      <div className={styles.content}>
        <Grid container spacing={2}>
          {topAlbums.length > 0 &&
            topAlbums.map((album, index) => (
              <Grid key={index} item xs={12} sm={6} md={2}>
                <Card
                  data={{
                    image: album.image,
                    songs: album.songs,
                    slug: album.slug,
                    title: album.title,
                    follows: album.follows,
                  }}
                  type={"album"}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default TopAlbums;
