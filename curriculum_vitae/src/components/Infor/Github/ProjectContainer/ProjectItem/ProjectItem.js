import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    "& :last-child": {
      marginBottom: 0,
    },
    marginBottom: "10px",
  },
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
});

// const PRO_URL = "http://localhost:5000/image/avatar.jpg";
const DEV_URL = "http://localhost:5000";

class ProjectItem extends Component {
  render() {
    const {
      classes,
      project_name,
      heroku_link,
      youtobe_link,
      github_link,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container className={classes.project_item}>
          <Grid item xs={6} md={4} className={classes.project_name}>
            <h4> {project_name}</h4>
          </Grid>
          <Grid item xs={6} md={8} className={classes.item_link}>
            <a target="_blank" href={github_link}>
              Github: {github_link}
            </a>
            <a target="_blank" href={heroku_link}>
              Heroku: {heroku_link}{" "}
            </a>
            <a target="_blank" href={youtobe_link}>
              Youtobe: {youtobe_link}
            </a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectItem);
