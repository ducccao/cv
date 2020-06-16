import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import Achievement from "./Achievement/Achievement";
import GithubLinker from "./GithubLinker/GithubLinker";
import Axios from "axios";
const styles = () => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    minHeight: "20%",
    backgroundColor: "white",
    border: "0px solid black",
  },
  github_content: {
    padding: 20,
  },
});

// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
const DEV_URL = "http://localhost:5000";
let log = console.log;
class Github extends Component {
  state = {
    github_link: [],
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
    const { github_link, achievement } = this.state;

    const GithublinkerElement = github_link.map((git, index) => {
      return <GithubLinker key={index} github_link={git.github_link} />;
    });

    const AchievementElement = achievement.map((achi, index) => {
      return <Achievement key={index} hackerrank={achi.hackerrank} />;
    });

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.github_content}>
          {GithublinkerElement}
        </Grid>
        <Grid item xs={12} className={classes.github_content}>
          <ProjectContainer />
        </Grid>
        <Grid item xs={12} className={classes.github_content}>
          {AchievementElement}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Github);
