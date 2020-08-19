import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Axios from "axios";
import BasicInfor from "./BasicInfor/BasicInfor";
import HardSkills from "./HardSkills/HardSkills";
import Wanted from "./Wanted/Wanted";

const styles = (theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "30%",
    //backgroundColor: "lightCoral",
    border: "0px solid black",
  },
  base_infor_content: {
    padding: 20,
  },
  base_infor_item: {
    padding: "0 20px",
  },
  sea_level: {
    position: "absolute",
    right: 0,
    top: "10%",
    height: "100%",
    width: 2,
    backgroundColor: "black",
    [theme.breakpoints.between(0, 960)]: {
      top: "unset",
      right: "unset",
      bottom: 0,
      left: 20,
      height: 3,
      width: "70%",
    },
  },
});
// const DEV_URL = "http://localhost:5000";
// const PRO_URL = "https://caovanducs.herokuapp.com/image/avatar.jpg";
const DEV_URL = "https://caovanducs.herokuapp.com";

let log = console.log;
class BaseInfor extends Component {
  state = {
    base_infor: [],
    hard_skills: [],
    wanted: [],
  };

  /*
    let config = {
    headers: {
      header1: value,
    }
  }

  let data = {
    'HTTP_CONTENT_LANGUAGE': self.language
  }

  axios.post(URL, data, config).then(...)
  */

  componentDidMount = () => {
    const { hard_skills, wanted } = this.state;

    // get basic infor
    Axios.get(`${DEV_URL}/user/myself/base_infor`)
      .then((data) => {
        const new_data = [data.data];

        this.setState({
          base_infor: new_data,
        });
      })
      .catch((error) => {
        log(error);
      });

    // get hard skill
    Axios.get(`${DEV_URL}/user/myself/hard_skills`)
      .then((data) => {
        const new_data = [...hard_skills, data.data];
        this.setState({
          hard_skills: new_data,
        });
      })
      .catch((error) => {
        log(error.response);
      });
    // get wanted
    Axios.get(`${DEV_URL}/user/myself/wanted`)
      .then((data) => {
        const new_data = [...wanted, data.data];
        this.setState({
          wanted: new_data,
        });
      })
      .catch((error) => {
        log(error.response);
      });
  };

  render() {
    const { classes } = this.props;
    const { base_infor, hard_skills, wanted } = this.state;
    const BasicInforElement = base_infor.map((infor, index) => {
      return (
        <BasicInfor
          key={index}
          name={infor.name}
          major={infor.major}
          school={infor.school}
          grades={infor.grades}
        />
      );
    });

    const HardSkillElement = hard_skills.map((hard_skill, index) => {
      return (
        <HardSkills
          key={index}
          skills={hard_skill.skills}
          foundation={hard_skill.foundation}
        />
      );
    });

    const WantedElement = wanted.map((want, index) => {
      return <Wanted key={index} message={want.message} />;
    });

    return (
      <Grid id="basic_infor" container className={classes.root}>
        <Grid item xs={12} className={classes.base_infor_content}>
          {BasicInforElement}
        </Grid>
        <Grid item xs={12} className={classes.base_infor_content}>
          {HardSkillElement}
        </Grid>
        <Grid item xs={12} className={classes.base_infor_content}>
          {WantedElement}
        </Grid>
        <div className={classes.sea_level}></div>
      </Grid>
    );
  }
}

export default withStyles(styles)(BaseInfor);
