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
  github_item: {
    padding: "0 20px",
  },
  special_css: {
    overflow: "hidden",
  },
});

class GithubLinker extends Component {
  render() {
    const { github_link, classes } = this.props;
    return (
      <div>
        <div className={classes.special_css}>
          <h3>Github </h3>
        </div>
        <a className={classes.github_item} href="https://github.com/AintDuc">
          {github_link}
        </a>
      </div>
    );
  }
}

export default withStyles(styles)(GithubLinker);
