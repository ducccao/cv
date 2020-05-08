import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";

import About from "./About";
import Skills from "./Skills";
const style = (theme) => ({
  root: {
    "& section": {
      height: "100vh",
      borderBottom: "1px solid gray",
      padding: "100px 70px",
    },
  },
  name_css: {
    fontSize: 70,
    height: 100,
    "& span": {
      color: "#1d6a96",
    },
  },
  basic_contact_css: {
    "& span": {
      fontSize: 20,
      marginRight: 15,
      position: "relative",
    },
    "& span::after": {
      content: `"·"`,
      position: "absolute",
      right: -7,
      height: 1,
      width: 1,
      backgroundColor: "black",
    },
    "& span:last-child::after": {
      content: `""`,
    },
  },

  mess_css: {
    padding: "50px 0",
    "& span": {
      fontSize: 20,
    },
  },

  link_social_css: {
    display: "flex",
  },
  icon_css: {
    height: 50,
    width: 50,
    padding: 12,
    backgroundColor: "#283b42",
    borderRadius: "50%",
    "&:first-child": {
      marginRight: 20,
    },

    "&:hover": {
      backgroundColor: "#1d6a96",
    },
  },
});

let log = console.log;

class MyInfor extends Component {
  state = {
    transform: 0,
  };
  handleScroll = (e) => {
    let scrollTop = e.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classnames(classes.root)}>
        {/* about */}
        <About />
        {/* experience */}
        <section id="experience">Kinh nghiệm</section>
        {/* education */}
        <section id="education">Học vấn</section>
        {/* skills */}
        <section id="skills">
          <Skills />
        </section>
        {/* interests */}
        <section id="interests">Sở thích</section>
      </Grid>
    );
  }
}

export default withStyles(style)(MyInfor);
