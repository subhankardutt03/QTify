import React from "react";
import styles from "../Feedback/Feedback.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Feedback = ({ text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleOpen} className={styles.btn}>
        {text}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.headWrapper}>
            <Typography
              variant="h5"
              color="black"
              gutterBottom
              className={styles.heading}
            >
              Feedback
            </Typography>
            <CloseIcon className={styles.icon} onClick={handleClose} />
          </div>
          <TextField
            label="Full Name"
            name="full_name"
            color="success"
            style={{ marginBottom: "15px" }}
            // value={name}
            // onChange={handleChange}
            fullWidth
            focused
          />
          <TextField
            label="Email ID"
            name="email"
            // value={name}
            // onChange={handleChange}
            color="success"
            style={{ marginBottom: "15px" }}
            fullWidth
            focused
          />
          <TextField
            label="Subject"
            name="subject"
            // value={name}
            // onChange={handleChange}
            color="success"
            style={{ marginBottom: "15px" }}
            fullWidth
            focused
          />
          <TextField
            label="Description"
            name="description"
            // value={message}
            // onChange={handleChange}
            color="success"
            style={{ marginBottom: "15px" }}
            multiline
            rows={4}
            fullWidth
            focused
          />
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Feedback;
