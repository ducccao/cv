import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import Achievement from "./Achievement/Achievement";
import GithubLinker from "./GithubLinker/GithubLinker";
import ProjectItem from "./ProjectContainer/ProjectItem/ProjectItem";
import Axios from "axios";
const styles = (theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "30%",
    backgroundColor: "white",
    border: "0px solid black",
  },
  github_content: {
    padding: 20,
  },
  sea_level: {
    position: "absolute",
    right: 0,
    top: "5%",
    height: "60%",
    width: 3,
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
class Github extends Component {
  state = {
    github_link: [],
    project: [],
    achievement: [],
  };

  componentDidMount = () => {
    // get link github
    Axios.get(`${DEV_URL}/myself/github`)
      .then((data) => {
        const new_data = [data.data];

        this.setState({
          github_link: new_data,
        });
      })
      .catch((er) => {
        log(er);
      });

    // get data project
    Axios.get(`${DEV_URL}/myself/projects`)
      .then((data) => {
        const new_data = [data.data];
        //  log(new_data);
        this.setState({
          project: new_data[0],
        });
      })
      .catch((er) => {
        log(er);
      });

    // get achievement
    Axios.get(`${DEV_URL}/myself/achievement`)
      .then((data) => {
        const new_data = [data.data];
        this.setState({
          achievement: new_data,
        });
      })
      .catch((er) => {
        log(er);
      });
  };

  render() {
    const { classes } = this.props;
    const { github_link, achievement, project } = this.state;

    // github link element
    const GithublinkerElement = github_link.map((git, index) => {
      return <GithubLinker key={index} github_link={git.github_link} />;
    });

    // project link element
    const ProjectItemElement = project.map((pj, index) => {
      return (
        <ProjectItem
          key={index}
          project_name={pj.project_name}
          heroku_link={pj.heroku_link}
          youtobe_link={pj.youtobe_link}
          github_link={pj.github_link}
        />
      );
    });

    // achie ele
    const AchievementElement = achievement.map((achi, index) => {
      return <Achievement key={index} hackerrank={achi.hackerrank} />;
    });

    return (
      <Grid id="github" container className={classes.root}>
        <Grid item xs={12} className={classes.github_content}>
          {GithublinkerElement}
        </Grid>
        <Grid item xs={12} className={classes.github_content}>
          <ProjectContainer>{ProjectItemElement}</ProjectContainer>
        </Grid>
        <Grid item xs={12} className={classes.github_content}>
          {AchievementElement}
        </Grid>
        <div className={classes.sea_level}></div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Github);
