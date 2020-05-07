import React, { Component } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";
const style = (theme) => ({
  root: {},
  my_link_pure_css: {
    with: "100%",
    height: "100%",
    display: "flex",
  },
  link_avatar: {
    textAlign: "center",
    height: "40%",
  },
  d_flex_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  d_flex_start: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  link_item: {
    height: "60%",
  },
  link_item_content: {
    textAlign: "center",
    padding: 10,
  },
});

// custom button
const CustomButton = withStyles((theme) => ({
  root: {
    "&:hover": {},
  },
}))(Button);

class MyLink extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classnames(classes.my_link_pure_css, classes.root)}
      >
        <Grid
          item
          xs={12}
          className={classnames(classes.link_avatar, classes.d_flex_center)}
        >
          avata
        </Grid>
        <Grid item xs={12} className={classnames(classes.link_item)}>
          <Grid item xs={12} className={classes.link_item_content}>
            <button>về tôi</button>
          </Grid>
          <Grid item xs={12} className={classes.link_item_content}>
            Kinh nghiệm
          </Grid>
          <Grid item xs={12} className={classes.link_item_content}>
            Học vấn
          </Grid>
          <Grid item xs={12} className={classes.link_item_content}>
            Kỹ thuật
          </Grid>
          <Grid item xs={12} className={classes.link_item_content}>
            Sở thích
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(MyLink);
