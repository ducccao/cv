import React from "react";
import "./Global.css";
import CV from "./components/CV";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& a": {
      textDecoration: "none",
    },
    "& a:hover": {
      color: "black",
    },
    "& a:visited": {
      color: "black",
    },

    "& h3": {
      height: 30,

      position: "relative",
      transition: "0.5s",
      transformOrigin: "bottom left",
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
