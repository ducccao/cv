import React, { Component } from "react";
import Avatar from "./Avatar/Avatar";
import Infor from "./Infor/Infor";
import { Grid } from "@material-ui/core";

// let log = console.log;

class CV extends Component {
  state = {
    scroll_status: false,
    theposition: 0,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = (event) => {
    // let winScroll =
    //   document.body.scrollTop || document.documentElement.scrollTop;
    // log(winScroll);
    // if (winScroll > 0 && winScroll < 300) {
    //   this.setState({
    //     scroll_status: true,
    //   });
    // } else if (winScroll > 300 && winScroll < 400) {
    //   this.setState({
    //     scroll_status: false,
    //   });
    // }
    // log(this.state.scroll_status);
    // if (this.state.scroll_status) {
    //   document.documentElement.scrollTo(0, 400);
    // } else {
    //   document.documentElement.scrollTo(0, 0);
    // }
    // // document.documentElement.scrollTo(0, 500);
    // // log(document.documentElement.scrollTo);
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Avatar></Avatar>
        </Grid>
        <Grid item xs={12}>
          <Infor />
        </Grid>
      </Grid>
    );
  }
}

export default CV;
