"use strict";

const home = (req, res)=>{
  res.render("home/index");
};

const loginPage = (req, res)=>{
  res.render("home/login")
};

module.exports = {
  home,
  loginPage,
}