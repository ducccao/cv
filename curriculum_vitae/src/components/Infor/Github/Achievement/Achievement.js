import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    "& a:visited": {
      color: "black",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "black",
      textDecoration: "none",
    },
    height: "100%",
    width: "100%",
  },
  achievement_item: {
    padding: "0 20px",
  },
});

// const DEV_URL = "http://localhost:5000";
// const PRO_URL = "https://caovanducs.herokuapp.com/image/avatar.jpg";
const DEV_URL = "https://caovanducs.herokuapp.com";

class Achievement extends Component {
  render() {
    const { hackerrank, classes } = this.props;
    const src_img = DEV_URL + hackerrank;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <h3>Thành tích khác</h3>
        </Grid>
        <Grid item xs={12}>
          <h4 className={classes.achievement_item}>Hackerrank</h4>
        </Grid>
        <Grid item xs={12}>
          <img
            alt="achie_img"
            className={classes.achievement_item}
            src={src_img}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Achievement);
