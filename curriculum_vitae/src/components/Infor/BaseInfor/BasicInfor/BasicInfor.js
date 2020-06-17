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
class BasicInfor extends Component {
  render() {
    const { classes, name, school, major, grades } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.special_css}>
          <h3>Thông tin cơ bản</h3>
        </div>
        <div id="name" className={classes.base_infor_item}>
          <span>Họ tên: </span> {name}
        </div>
        <div id="school" className={classes.base_infor_item}>
          <span>Học vấn: </span> {school}
        </div>
        <div id="specialism" className={classes.base_infor_item}>
          <span> Chuyên ngành:</span> {major}
        </div>
        <div id="grades" className={classes.base_infor_item}>
          <span> Điểm trung bình:</span> {grades}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BasicInfor);
