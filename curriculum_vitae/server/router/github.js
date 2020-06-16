const express = require("express");
const github_router = new express.Router();

// github link
github_router.get("/myself/github", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    github_link: "https://github.com/AintDuc",
  };
  res.send(data);
});

// project link
github_router.get("/myself/projects", (req, res) => {
  const data = [
    {
      id: Math.floor(Math.random() * 10),
      project_name: "Deplace Maison",
      github_link: "https://github.com/AintDuc/Project-3-Deplacemaison",
      heroku_link: "https://frontend-journey.herokuapp.com/",
      youtobe_link:
        "https://www.youtube.com/watch?v=poX8tXcVCFA&feature=youtu.be",
    },
    {
      id: Math.floor(Math.random() * 10),
      project_name: "Page Cinema",
      github_link: "https://github.com/AintDuc/Project_2_PageCinema",
      heroku_link: "https://backend-journey.herokuapp.com/",
      youtobe_link:
        "https://www.youtube.com/watch?v=ANlC8YWdlKk&feature=youtu.be",
    },
    {
      id: Math.floor(Math.random() * 10),
      project_name: "Blue sky",
      github_link: "https://github.com/AintDuc/bluessky",
      heroku_link: "http://bluessky.herokuapp.com/",
      youtobe_link:
        "https://www.youtube.com/playlist?list=PL0-FzENhrcBSP88eGRNwnrsWCHbVr6P-V",
    },
  ];
  res.send(data);
});

// achievement link
github_router.get("/myself/achievement", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    hackerrank: "/image/hackerrank.png",
  };
  res.send(data);
});

module.exports = github_router;
