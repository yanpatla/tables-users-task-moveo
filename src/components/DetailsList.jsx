import { Grid, Link, Typography } from "@material-ui/core";
import React from "react";

const DetailsList = ({ details, userdetails }) => {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      {details === 1 ? (
        <>
          <Typography variant="h5" gutterBottom>
            <p>Hi! My Name is:</p>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span>{userdetails.name.first}</span>
          </Typography>
        </>
      ) : details === 2 ? (
        <>
          <Typography variant="h5" gutterBottom>
            <p> My E-mail is:</p>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Link href={`mailto:${userdetails.email}`}>
              {userdetails.email}
            </Link>
          </Typography>
        </>
      ) : details === 3 ? (
        <>
          <Typography variant="h5" gutterBottom>
            <p> My Age is:</p>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span>{userdetails.dob.age}</span>
          </Typography>
        </>
      ) : null}
    </Grid>
  );
};

export default DetailsList;
