import React from "react";
import "./Global.css";
import CV from "./components/CV";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& a": {
      width: "fit-content",
      color: "black",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "black",
    },
    "& a:visited ": {
      color: "black",
    },
    "& a:active": {
      color: "black",
    },

    "& h3": {
      height: 30,

      position: "relative",
      transition: "0.5s",
      transformOrigin: "bottom left",
      marginBottom: 10,
    },
  },
});

function App(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <CV></CV>
    </div>
  );
}

export default App;
