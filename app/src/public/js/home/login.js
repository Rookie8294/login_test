"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener('click', login);


//req 요청 데이터
function login(){
  if(!id.value) return alert("아이디를 입력해주십시오.");
  if(!psword.value) return alert("비밀번호를 입력해주십시오.")

  const req = {
    id: id.value,
    psword: psword.value,
  };

  //data가 서버로 전달
  fetch('/login', {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res)=> res.json())
  .then((res) => {
    if (res.success){
      location.href = "/";
    } else {
      if (res.err) return alert(res.err)
      alert(res.msg);
    }
  })
  .catch((err)=>{
    console.error(new Error('로그인 중 에러 발생'))
  });
  
};