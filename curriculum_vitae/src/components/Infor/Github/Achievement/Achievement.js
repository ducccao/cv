import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

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
  },
  achievement_item: {
    padding: "0 20px",
  },
  special_css: {
    overflow: "hidden",
  },
});

// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
const DEV_URL = "http://localhost:5000";

class Achievement extends Component {
  render() {
    const { hackerrank, classes } = this.props;
    const src_img = DEV_URL + hackerrank;
    return (
      <div>
        <div className={classes.special_css}>
          <h3>Thành tích khác</h3>
        </div>
        <h4 className={classes.achievement_item}>Hackerrank</h4>
        <img className={classes.achievement_item} src={src_img} />
      </div>
    );
  }
}

export default withStyles(styles)(Achievement);
