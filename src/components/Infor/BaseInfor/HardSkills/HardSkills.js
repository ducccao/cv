import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    "& span": {
      fontWeight: "bold",
    },
  },
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
      <div className={classes.root}>
        <div className={classes.special_css}>
          <h3>Kinh nghiệm</h3>
        </div>

        <div id="hard_skills" className={classes.base_infor_item}>
          <span>Công nghệ: </span> {skills}
        </div>
        <div id="foundations" className={classes.base_infor_item}>
          <span>Kỹ thuật: </span>
          {foundation}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HardSkills);
