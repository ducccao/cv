const express = require("express");
const user_router = new express.Router();

user_router.get("/user/myself/base_infor", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    name: "Trịnh Cao Văn Đức",
    school: "Sinh viên năm 3 - Đại học Khoa học tự nhiên",
    major: "Hệ thống thông tin",
    grades: "2.8/4.0",
  };
  res.send(data);
});

user_router.get("/user/myself/hard_skills", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    skills: "C++, C#, Python, Javascript, Reactjs, Nodejs.",
    foundation: "Algorithms, Data Structures, OOP, SQL, NoSQL.",
  };
  res.send(data);
});

user_router.get("/user/myself/wanted", (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10),
    message: "Được thực tập vị trí javascript developer.",
  };
  res.send(data);
});
module.exports = user_router;
