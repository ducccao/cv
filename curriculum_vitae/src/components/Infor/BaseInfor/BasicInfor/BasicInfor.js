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
class BasicInfor extends Component {
  render() {
    const { classes, name, school, major, grades } = this.props;
    return (
      <div>
        <div className={classes.special_css}>
          <h3>Thông tin cơ bản</h3>
        </div>
        <div id="name" className={classes.base_infor_item}>
          Họ tên: {name}
        </div>
        <div id="school" className={classes.base_infor_item}>
          Học vấn: {school}
        </div>
        <div id="specialism" className={classes.base_infor_item}>
          Chuyên ngành: {major}
        </div>
        <div id="grades" className={classes.base_infor_item}>
          Điểm trung bình: {grades}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BasicInfor);
