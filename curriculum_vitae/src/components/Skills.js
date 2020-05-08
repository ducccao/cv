import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { ReactComponent as CssIcon } from "./../assets/skillsIcon/css.svg";
import { ReactComponent as HtmlIcon } from "./../assets/skillsIcon/html.svg";
import { ReactComponent as JsIcon } from "./../assets/skillsIcon/js.svg";
import { ReactComponent as NodeJsIcon } from "./../assets/skillsIcon/nodejs.svg";
import { ReactComponent as ReactIcon } from "./../assets/skillsIcon/react.svg";
import { ReactComponent as SassIcon } from "./../assets/skillsIcon/sass.svg";
const useStyles = makeStyles((theme) => ({
  root: {},
  skill_header_css: {
    fontSize: 70,
  },
  skill_tool_infor_css: {
    fontSize: 30,
  },

  skill_tool_css: {
    display: "flex",
  },

  icon_css: {
    height: 50,
    width: 50,
    marginRight: 20,
    // html icon css
    "&:first-child": {
      "& svg": {
        "& path": {
          fill: "#283b42",
        },
      },
      "& svg:hover": {
        "& path": {
          fill: "#DD512A",
        },
      },
    },

    // css icon css
    "&:nth-child(2)": {
      "& svg": {
        "& polygon:first-child": {
          fill: "#283b42",
        },
        "& polygon:nth-child(2)": {
          fill: "#d1dddb",
        },
      },
      "& svg:hover": {
        "& polygon:first-child": {
          fill: "#328fe7",
        },
      },
    },

    // js icon css
    "&:nth-child(3)": {
      "& svg": {
        "& path:first-child": {
          fill: "#283b42",
        },
        "& path#s": {
          fill: "#d1dddb",
        },
        "& path:nth-child(2)": {
          fill: "#d1dddb",
        },
        "& path:nth-child(3)": {
          fill: "#d1dddb",
        },
      },
      "& svg:hover": {
        "& path:first-child": {
          fill: "#E4BA42;",
        },
      },
    },

    // react icon css
    "&:nth-child(4)": {
      "& svg": {
        "& path:first-child": {
          fill: "#283b42",
        },
        "& path:nth-child(2)": {
          fill: "#d1dddb",
        },
      },
      "& svg:hover": {
        "& path:first-child": {
          fill: "#328fe7",
        },
      },
    },

    // node icon css
    "&:nth-child(5)": {
      "& svg": {
        "& path:first-child": {
          fill: "#283b42",
        },
        "& path#nodejs_n": {
          fill: "#d1dddb",
        },
        "& path#nodejs_d": {
          fill: "#d1dddb",
        },
      },
      "& svg:hover": {
        "& path:first-child": {
          fill: "#85b8cb",
        },
      },
    },

    "&:last-child": {
      marginRight: 0,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Skills = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.skill_header_css}>
        <div>Kỹ thuật</div>
      </Grid>

      <Grid item xs={12} className={classes.skill_tool_infor_css}>
        <div>PROGRAMMING LANGUAGES & TOOLS</div>
      </Grid>

      <Grid item xs={12} className={classes.skill_tool_css}>
        <div className={classes.icon_css}>
          <HtmlIcon />
        </div>
        <div className={classes.icon_css}>
          <CssIcon />
        </div>
        <div className={classes.icon_css}>
          <JsIcon />
        </div>
        <div className={classes.icon_css}>
          <ReactIcon />
        </div>
        <div className={classes.icon_css}>
          <NodeJsIcon />
        </div>
      </Grid>
    </Grid>
  );
};

export default Skills;
