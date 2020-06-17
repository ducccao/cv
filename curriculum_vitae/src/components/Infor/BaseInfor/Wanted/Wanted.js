import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {},
  base_infor_item: {
    padding: "0 20px",
  },
  special_css: {
    overflow: "hidden",
  },
});
class Wanted extends Component {
  render() {
    const { classes, message } = this.props;
    return (
      <div>
        <div className={classes.special_css}>
          <h3> Mong muốn</h3>
        </div>

        <div id="wanted" className={classes.base_infor_item}>
          {message}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Wanted);
