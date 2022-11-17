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
  
  fetch('/login', {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req)
  })
};