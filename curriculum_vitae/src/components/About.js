import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as FacebookIcon } from "./../assets/svg/fb.svg";
import { ReactComponent as InstagramIcon } from "./../assets/svg/ins.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  name_css: {
    fontSize: 70,
    height: 100,
    "& span": {
      color: "#1d6a96",
    },
  },
  basic_contact_css: {
    "& span": {
      fontSize: 20,
      marginRight: 15,
      position: "relative",
    },
    "& span::after": {
      content: `"·"`,
      position: "absolute",
      right: -7,
      height: 1,
      width: 1,
      backgroundColor: "black",
    },
    "& span:last-child::after": {
      content: `""`,
    },
  },

  mess_css: {
    padding: "50px 0",
    "& span": {
      fontSize: 20,
    },
  },

  link_social_css: {
    display: "flex",
  },
  icon_css: {
    height: 50,
    width: 50,
    padding: 12,
    backgroundColor: "#283b42",
    borderRadius: "50%",
    "&:first-child": {
      marginRight: 20,
    },

    "&:hover": {
      backgroundColor: "#1d6a96",
    },
  },
});

const About = (props) => {
  const classes = useStyles(props);
  return (
    <section id="about">
      <Grid container>
        <Grid item xs={12} className={classes.name_css}>
          <div>
            Trịnh Cao <span>Văn Đức</span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <address className={classes.basic_contact_css}>
            <span>141 Nguyễn Văn Cừ HCMUS</span>
            <span>(+84)901-435-802</span>
            <span>
              <a href="mailto:caovanducs@gmail.com">caovanducs@gmail.com</a>
            </span>
          </address>
        </Grid>
        <Grid item xs={12} className={classes.mess_css}>
          <span>
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </span>
        </Grid>

        <Grid item xs={12} className={classes.link_social_css}>
          <div className={classes.icon_css}>
            <a
              href="https://www.facebook.com/PanAngelo.99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
          <div className={classes.icon_css}>
            <a
              href="https://www.instagram.com/aintducc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
