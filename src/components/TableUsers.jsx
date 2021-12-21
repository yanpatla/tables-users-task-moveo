import React, { useContext, useState } from "react";
import { Avatar, Button, Grid, Link, makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { TableContainer } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Box from "@mui/material/Box";
import HeightIcon from "@mui/icons-material/Height";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
    alignContent: "center",
  },
  tableHeaderCell: {
    fontWeight: 700,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
  },
  pointers: {
    cursor: "pointer",
  },
}));

const randomColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);

  return color;
};

const TableUsers = () => {
  const { user, previousPage, nextPage, setUser } = useContext(UserContext);
  const [order, setOrder] = useState("ASC");
  let history = useHistory();

  const sorting = (column) => {
    if (order === "ASC") {
      if (column === "dob.age") {
        const sorted = user.sort((a, b) =>
          a.dob.age > b.dob.age ? 1 : b.dob.age > a.dob.age ? -1 : 0
        );
        setUser(sorted);
        setOrder("DSC");
      }
      if (column === "name.first") {
        const sorted = user.sort((a, b) =>
          a.name.first > b.name.first ? 1 : b.name.first > a.name.first ? -1 : 0
        );
        setUser(sorted);
        setOrder("DSC");
      }
      if (column === "gender") {
        const sorted = user.sort((a, b) =>
          a.gender > b.gender ? 1 : b.gender > a.gender ? -1 : 0
        );
        setUser(sorted);
        setOrder("DSC");
      }
    }
    if (order === "DSC") {
      if (column === "dob.age") {
        const sorted = user.sort((a, b) =>
          a.dob.age < b.dob.age ? 1 : b.dob.age < a.dob.age ? -1 : 0
        );
        setUser(sorted);
        setOrder("ASC");
      }
      if (column === "name.first") {
        const sorted = user.sort((a, b) =>
          a.name.first < b.name.first ? 1 : b.name.first < a.name.first ? -1 : 0
        );
        setUser(sorted);
        setOrder("ASC");
      }
      if (column === "gender") {
        const sorted = user.sort((a, b) =>
          a.gender < b.gender ? 1 : b.gender < a.gender ? -1 : 0
        );
        setUser(sorted);
        setOrder("ASC");
      }
    }
  };

  const getUserDetail = async (userdetail) => {
    localStorage.setItem("userdetail", JSON.stringify(userdetail));
  };

  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        All Users
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Picture</TableCell>
              <TableCell
                onClick={() => sorting("name.first")}
                className={classes.tableHeaderCell}
              >
                <Box
                  className={classes.pointers}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Full name <SortByAlphaIcon />
                </Box>
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Email </TableCell>
              <TableCell
                onClick={() => sorting("gender")}
                className={classes.tableHeaderCell}
              >
                <Box
                  className={classes.pointers}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Gender <HeightIcon />
                </Box>
              </TableCell>
              <TableCell
                onClick={() => sorting("dob.age")}
                className={classes.tableHeaderCell}
              >
                <Box
                  className={classes.pointers}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Age <HeightIcon />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((users) => (
              <TableRow
                className={classes.pointers}
                hover
                key={users.login.uuid}
                onClick={() => {
                  getUserDetail(users);
                  history.push(`/user-details/${users.login.username}`);
                }}
              >
                <TableCell component="th" scope="row">
                  <Avatar alt="" src={users.picture.thumbnail} />
                </TableCell>
                <TableCell>
                  <Avatar
                    style={{
                      backgroundColor: randomColor(),
                    }}
                  >
                    {users.name.first[0]}
                    {users.name.last[0]}
                  </Avatar>
                </TableCell>

                <TableCell>
                  <Typography>
                    <Link href={`mailto:${users.email}`}>{users.email}</Link>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography>{users.gender}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{users.dob.age}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button onClick={previousPage} variant="contained" size="medium">
          &laquo; Previous
        </Button>
        <Button onClick={nextPage} variant="contained" size="medium">
          Next &raquo;
        </Button>
      </Box>
    </Grid>
  );
};

export default TableUsers;
