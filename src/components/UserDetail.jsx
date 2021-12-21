import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Avatar, CardActionArea, Grid } from "@mui/material";

import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Details from "./Details";
import DetailsList from "./DetailsList";
import MapDetail from "./MapDetail";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const UserDetail = () => {
  const [userdetails, setUserDetails] = useState({});
  const [details, setDetails] = useState(1);

  useEffect(() => {
    const getLocalUserDetails = async () => {
      const userdetail = await JSON.parse(localStorage.getItem("userdetail"));
      setUserDetails(userdetail);
    };

    getLocalUserDetails();
  }, []);

  if (Object.keys(userdetails).length === 0) return null;

  return (
    <>
      <Link to="/">
        <Button variant="contained" size="large">
          Back to The Table
        </Button>
      </Link>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          User Details
        </Typography>
        <Card sx={{ width: "100%", maxWidth: 750 }}>
         
            {Object.keys(userdetails).length === 0 ? (
              <Skeleton variant="circular">
                <Avatar
                  sx={{ width: 150, height: 150, mx: "auto" }}
                  // src={userdetails.picture.large}
                />
              </Skeleton>
            ) : (
              <Avatar
                sx={{ width: 150, height: 150, mx: "auto" }}
                src={userdetails.picture.large}
              />
            )}

            <CardContent>
              <DetailsList details={details} userdetails={userdetails} />
              <Details setDetails={setDetails} details={details} />
            </CardContent>
    
        </Card>
        {details === 4 ? (
          <Card sx={{ maxWidth: 750, width: "100%", height: 300, m: 1 }}>
            <MapDetail userdetails={userdetails} />
          </Card>
        ) : null}
      </Grid>
    </>
  );
};

export default UserDetail;
