import React, { Component } from "react";
import MyInfor from "./MyInfor";
import MyLink from "./MyLink";
import { withStyles, Grid } from "@material-ui/core";
import classnames from "classnames";

const style = (theme) => ({
  root: {},
  my_link_pure_css: {
    backgroundColor: "rgb(50, 143, 231);",
    height: "100vh",
    position: "sticky",
    top: 0,
  },
  my_infor_pure_css: {
    backgroundColor: "#d1dddb",
    minHeight: "200vh",
  },
});
let log = console.log;
class CV extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container id="CV" className={classes.root}>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
          <aside id="my_link" className={classnames(classes.my_link_pure_css)}>
            <MyLink />
          </aside>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <aside
            id="my_infor"
            className={classnames(classes.my_infor_pure_css)}
          >
            <MyInfor />
          </aside>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(CV);
