import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";
const style = (theme) => ({
  root: {
    minHeight: "200vh",
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

  componentDidMount = () => {
    log("myinfor didmount");
    window.addEventListener("sroll", this.handleScroll);
  };
  componentDidUpdate = () => {
    log("myinfor didupdate");
    log(this.state.transform);
  };
  render() {
    const { classes } = this.props;
    return <Grid className={classnames(classes.root)}>my infor</Grid>;
  }
}

export default withStyles(style)(MyInfor);
