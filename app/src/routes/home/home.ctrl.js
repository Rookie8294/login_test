"use strict";

const user = {
  id : ["jang", "choi", "장용석"],
  psword : ["1234", "1234", "12345"],
};


const output = {
  home : (req, res)=>{
    res.render("home/index");
  },

  login : (req, res)=>{
    res.render("home/login")
  },
}


// front단에서 요청한 변수 데이터를 req로 받는다
const process = {
  login: (req, res)=>{
    const id = req.body.id,
      psword = req.body.psword

    if(user.id.includes(id)){
      const idx = user.id.indexOf(id);
      if(user.psword[idx]=== psword){
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process
}