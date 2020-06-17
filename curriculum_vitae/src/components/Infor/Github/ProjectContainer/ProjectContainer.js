import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  root: {},
  project_item: {
    border: "1px solid black",
    minHeight: "50px",
  },
  project_name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item_link: {
    display: "flex",
    flexDirection: "column",
  },
  special_css: {
    marginBottom: 20,
  },
});

// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
// const DEV_URL = "http://localhost:5000";
// let log = console.log;
class ProjectContainer extends Component {
  state = {};

  componentDidMount = () => {};
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.special_css}>
          <h3>Một số project về lập trình web</h3>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(ProjectContainer);
