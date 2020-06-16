import React, { Component } from "react";
import BaseInfor from "./BaseInfor/BaseInfor";
import Github from "./Github/Github";
import Social from "./Social/Social";
import { Grid, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  infor_content: {
    height: "100%",
  },
});
class Infor extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3} lg={4} className={classes.infor_content}>
          <BaseInfor></BaseInfor>
        </Grid>
        <Grid item xs={12} md={8} lg={7} className={classes.infor_content}>
          <Github></Github>
        </Grid>
        <Grid item xs={12} md={1} lg={1} className={classes.infor_content}>
          <Social></Social>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Infor);
