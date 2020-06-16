import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import ProjectItem from "./ProjectItem/ProjectItem";
import Axios from "axios";
const styles = () => ({
  root: {},
  project_item: {
    border: "1px solid black",
    minHeight: "50px",
  },
  project_name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item_link: {
    display: "flex",
    flexDirection: "column",
  },
  special_css: {
    overflow: "hidden",
  },
});

// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
const DEV_URL = "http://localhost:5000";
let log = console.log;
class ProjectContainer extends Component {
  state = {
    project: [],
  };

  componentDidMount = () => {
    // get data project
    Axios.get(`${DEV_URL}/myself/projects`)
      .then((data) => {
        const new_data = [data.data];
        log(new_data);
        this.setState({
          project: new_data[0],
        });
      })
      .catch((er) => {
        log(er);
      });
  };
  render() {
    const { classes } = this.props;
    const { project } = this.state;
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
    return (
      <div>
        <div className={classes.special_css}>
          <h3>Một số project về lập trình web</h3>
        </div>
        {ProjectItemElement}
      </div>
    );
  }
}

export default withStyles(styles)(ProjectContainer);
