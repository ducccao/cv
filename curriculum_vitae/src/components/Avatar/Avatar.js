import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatar_css: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //  boxShadow: "1px 1px 20px 20px black",
    "& img": {
      maxWidth: "100%",
      height: "100%",
      verticalAlign: "middle",
    },
  },
});

// const DEV_URL = "http://localhost:5000";
// const PRO_URL = "https://caovanducs.herokuapp.com/image/avatar.jpg";
const DEV_URL = "https://caovanducs.herokuapp.com";

class Avatar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} md={8} lg={6} className={classes.avatar_css}>
          <img alt="avatar" src={`${DEV_URL}/image/avatar.jpg`} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Avatar);
