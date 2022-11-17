"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener('click', login);


//req 요청 데이터
function login(){
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
      alert(res.msg);
    }
  })
  .catch((err)=>{
    console.error(new Error('로그인 중 에러 발생'))
  });
  
};