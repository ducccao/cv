const express = require("express");
const user_router = new express.Router();

user_router.get("/user/myself/base_infor", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    name: "Trịnh Cao Văn Đức",
    school: "Sinh viên năm 3 trường Khoa học tự nhiên",
    major: "Hệ thống thông tin",
    grades: "2.8/4.0",
  };
  res.send(data);
});

user_router.get("/user/myself/hard_skills", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    skills: "Basic C++, C#, python, javascript, reactjs, nodejs.",
    foundation: "Basic Algorithms, Data Structures, OOP, SQL.",
  };
  res.send(data);
});

user_router.get("/user/myself/wanted", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    message: "Được thực tập vị trí full-stack javascript developer.",
  };
  res.send(data);
});
module.exports = user_router;
