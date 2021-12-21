import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@material-ui/core";
const Details = ({ details, setDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
      }}
    >
      {details === 1 ? (
        <PersonOutlineIcon
          sx={{ color: " #F50057" }}
          onMouseEnter={() => setDetails(1)}
        />
      ) : (
        <PersonOutlineIcon onMouseEnter={() => setDetails(1)} />
      )}
      {details === 2 ? (
        <MailOutlineIcon
          sx={{ color: " #F50057" }}
          onMouseEnter={() => setDetails(2)}
        />
      ) : (
        <MailOutlineIcon onMouseEnter={() => setDetails(2)} />
      )}
      {details === 3 ? (
        <CakeIcon
          sx={{ color: " #F50057" }}
          onMouseEnter={() => setDetails(3)}
        />
      ) : (
        <CakeIcon onMouseEnter={() => setDetails(3)} />
      )}
      {details === 4 ? (
        <LocationOnIcon
          sx={{ color: " #F50057" }}
          onMouseEnter={() => setDetails(4)}
        />
      ) : (
        <LocationOnIcon onMouseEnter={() => setDetails(4)} />
      )}
    </Box>
  );
};

export default Details;
