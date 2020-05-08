import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import Scrollspy from "react-scrollspy";
const style = (theme) => ({
  root: {
    "& a": {
      textDecoration: "none",
      color: "rgba(238, 238, 238, 0.55);",
    },
    "& li": {
      listStyle: "none",
    },
    // "& a:hover": {
    //   color: "#fff",
    // },
    "& a:focus": {
      color: "#fff",
    },
  },
  active: {
    "& a": {
      color: "#fff",
    },
  },
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
    marginBottom: 5,
    fontSize: 20,
  },
});

// custom button
const CustomButton = withStyles((theme) => ({
  root: {
    "&:hover": {},
  },
}))(Button);

class MyLink extends Component {
  state = {
    isActive: false,
  };
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
          avatar
        </Grid>
        <Grid item xs={12} className={classnames(classes.link_item)}>
          <Scrollspy
            items={["about", "experience", "education", "skills", "interests"]}
            currentClassName={classes.active}
          >
            <Grid item xs={12} className={classes.link_item_content}>
              <li>
                <a
                  href="#about"
                  className={classnames({
                    [classes.active]: this.state.isActive,
                  })}
                >
                  Về tôi
                </a>
              </li>
            </Grid>
            <Grid item xs={12} className={classes.link_item_content}>
              <li>
                <a href="#experience">Kinh nghiệm</a>
              </li>
            </Grid>
            <Grid item xs={12} className={classes.link_item_content}>
              <li>
                <a href="#education">Học vấn</a>
              </li>
            </Grid>
            <Grid item xs={12} className={classes.link_item_content}>
              <li>
                <a href="#skills">Kỹ thuật</a>
              </li>
            </Grid>
            <Grid item xs={12} className={classes.link_item_content}>
              <li>
                <a href="#interests"> Sở thích</a>
              </li>
            </Grid>
          </Scrollspy>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(style)(MyLink);
