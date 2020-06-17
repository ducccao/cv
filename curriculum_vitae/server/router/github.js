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
      github_link: "https://bom.to/1l0Y6g",
      heroku_link: "https://bom.to/ljy1Xe",
      youtobe_link: "https://youtu.be/poX8tXcVCFA",
    },
    {
      id: Math.floor(Math.random() * 10),
      project_name: "Page Cinema",
      github_link: "https://bom.to/3q6XFu",
      heroku_link: "https://bom.to/CDotTe",
      youtobe_link: "https://youtu.be/ANlC8YWdlKk",
    },
    {
      id: Math.floor(Math.random() * 10),
      project_name: "Blue sky",
      github_link: "https://bom.to/8nKGLB",
      heroku_link: "https://bom.to/tp7Pss",
      youtobe_link: "https://bom.to/N2Hno7",
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
