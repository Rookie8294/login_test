"use strict";

const User = require("../../model/User");
const UserStorage = require("../../model/UserStorage");

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

  register: (req, res)=>{
    const user = new User(req.body);
    const response = user.register();
    return res.json(response)
  },

    // const id = req.body.id,
    //   psword = req.body.psword

    // const user = UserStorage.getUser("id", "psword")

    // const response = {};
    // if(user.id.includes(id)){
    //   const idx = user.id.indexOf(id);
    //   if(user.psword[idx]=== psword){
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = "로그인에 실패하셨습니다.";
    // return res.json(response);

};

module.exports = {
  output,
  process
}