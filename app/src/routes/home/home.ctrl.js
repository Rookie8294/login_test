"use strict";

const User = require("../../model/User");

const output = {
  home : (req, res)=>{
    res.render("home/index");
  },

  login : (req, res)=>{
    res.render("home/login")
  },
  register : (req, res)=>{
    res.render("home/register")
  }
}


// front단에서 요청한 변수 데이터를 req로 받는다
const process = {
  login: async (req, res)=>{
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: async (req, res)=>{
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response)
  },
};

module.exports = {
  output,
  process
}