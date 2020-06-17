import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import { ReactComponent as FacebookIcon } from "./../../../assets/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "./../../../assets/svg/ins.svg";

const styles = () => ({
  root: {
    minHeight: "100%",
    border: "0px solid black",
    padding: 20,

    "& svg": {
      height: 25,
      width: 25,
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  social_icon: {
    padding: "0 20px",
  },
});
class Social extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid id="social" container className={classes.root}>
        <Grid item xs={12}>
          <h3>Liên hệ</h3>
        </Grid>
        <Grid item xs={1} md={2} className={classes.social_icon}>
          <FacebookIcon />
        </Grid>
        <Grid item xs={1} md={2} className={classes.social_icon}>
          <InstagramIcon />
        </Grid>
        <Grid item xs={12} md={12}>
          <span>Điện thoại:</span> (+84) 901 435 802
        </Grid>
        <Grid item xs={12} md={12}>
          <span> Email:</span> caovanducs@gmail.com
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Social);
