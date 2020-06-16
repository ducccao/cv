import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {},
  base_infor_item: {
    padding: "0 20px",
  },
  special_css: {
    overflow: "hidden",
  },
});
class HardSkills extends Component {
  render() {
    const { classes, skills, foundation } = this.props;
    return (
      <div>
        <div className={classes.special_css}>
          <h3>kỹ năng cứng</h3>
        </div>

        <div id="hard_skills" className={classes.base_infor_item}>
          {skills}
        </div>
        <div id="foundations" className={classes.base_infor_item}>
          {foundation}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HardSkills);
