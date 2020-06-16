import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { ReactComponent as FacebookIcon } from "./../../../assets/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "./../../../assets/svg/ins.svg";

const styles = () => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: "100%",
    backgroundColor: "white",
    border: "0px solid black",
    padding: "20px 0",
    "& svg": {
      height: 50,
      width: 50,
    },
  },
});
class Social extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        {/* <FacebookIcon />
        <InstagramIcon /> */}
      </Grid>
    );
  }
}

export default withStyles(styles)(Social);
