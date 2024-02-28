import React from "react";
import styles from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>FAQs</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionIcon} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={styles.accordionSummary}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails}>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionIcon} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={styles.accordionSummary}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails}>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionIcon} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={styles.accordionSummary}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.AccordionIcon} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={styles.accordionSummary}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.AccordionDetails}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Faq;
