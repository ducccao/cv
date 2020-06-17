import React, { Component } from "react";
import { Button, Grid, withStyles } from "@material-ui/core";
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

  special_css: {
    marginBottom: 0,
  },
});
class Social extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid id="social" container className={classes.root}>
        <Grid item xs={12}>
          <div className={classes.special_css}>
            <h3>Liên hệ</h3>
          </div>
        </Grid>
        <Grid item xs={2} md={4} className={classes.social_icon}>
          <Button href="https://www.facebook.com/PanAngelo.99" target="_blank">
            <FacebookIcon />
          </Button>
        </Grid>
        <Grid item xs={2} md={4} className={classes.social_icon}>
          <Button>
            <InstagramIcon />
          </Button>
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
