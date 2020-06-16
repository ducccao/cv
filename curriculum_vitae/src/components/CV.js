import React, { Component } from "react";
import Avatar from "./Avatar/Avatar";
import Infor from "./Infor/Infor";
import { Grid } from "@material-ui/core";
class CV extends Component {
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
