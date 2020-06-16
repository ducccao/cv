import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Axios from "axios";
import BasicInfor from "./BasicInfor/BasicInfor";
import HardSkills from "./HardSkills/HardSkills";
import Wanted from "./Wanted/Wanted";

const styles = (theme) => ({
  root: {
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
});
// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
const DEV_URL = "http://localhost:5000";
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
    const { base_infor, hard_skills, wanted } = this.state;

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
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.base_infor_content}>
          {BasicInforElement}
        </Grid>
        <Grid item xs={12} className={classes.base_infor_content}>
          {HardSkillElement}
        </Grid>
        <Grid item xs={12} className={classes.base_infor_content}>
          {WantedElement}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BaseInfor);
