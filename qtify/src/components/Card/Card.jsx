import React from "react";
import styles from "../Card/Card.module.css";
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, songs, slug, title, follows } = data;
        return (
          <Tooltip placement="top" arrow title={`${songs.length} songs`}>
            <Link to={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img src={image} alt="song" loading="lazy" />
                  <div className={styles.banner}>
                    <Chip
                      sx={{ backgroundColor: "black", color: "white" }}
                      className={styles.Chip}
                      label={`${follows} Follows`}
                      size="small"
                    ></Chip>
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, title, likes } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="cardImg" loading="lazy" />
              <div className={styles.banner}>
                <p className={styles.pill}>{likes}</p>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};

export default Card;
