"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener('click', register);


//req 요청 데이터
function register(){
  if(!id.value) return alert("아이디를 입력해주십시오.");
  if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.")

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,

  }

  // data가 서버로 전달
  fetch('/register', {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res)=> res.json())
  .then((res) => {
    if (res.success){
      console.log('hi')
      location.href = "/login"
    } else {
      if (res.err) return alert(res.err)
      alert(res.msg);
    }
  })
  .catch((err)=>{
    console.error(err)
  });
  
};