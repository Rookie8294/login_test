"use strict";

const fs = require("fs").promises;// .promises fs의 반환값을 promise객체로 반환한다. (유지보수하기 좋아지고 코드를 좀 더 읽기 좋은 코드로 만들어준다.)



// # 붙여서 외부에서 접근할 수 없도록 private화 해준다
class UserStorage {
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info)=>{
      newUser[info] = users[info][idx]
      return newUser;
    },{});
    return userInfo;
  }

  // #을 붙여 은닉화 후 매서드를 사용하여 값을 받아온다
  static getUser(...fields) {
    // const users = this.#user;
    const newUsers = fields.reduce((newUsers, field)=>{
      if(users.hasOwnProperty(field)) {
        newUsers[field]  = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  };

  static getUserInfo(id) {
    return fs.readFile('./src/databases/users.json')
      .then((data)=>{
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);   
  };

  

  static save(userInfo){
    // const users = this.#user;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  };
};

module.exports = UserStorage;