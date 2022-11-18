"use strict";


// # 붙여서 외부에서 접근할 수 없도록 private화 해준다
class UserStorage {
  static #user = {
    id : ["jang", "choi", "장용석"],
    psword : ["1234", "1234", "12345"],
    name: ["1", "2", "3"],
  };

  // #을 붙여 은닉화 후 매서드를 사용하여 값을 받아온다
  static getUser(...fields) {
    const users = this.#user;
    const newUsers = fields.reduce((newUsers, field)=>{
      if(users.hasOwnProperty(field)) {
        newUsers[field]  = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  };

  static getUserInfo(id) {
    const users = this.#user;
    const idx = users.id.indexOf(id)
    const userInfo = Object.keys(users).reduce((newUser, info)=>{      
      newUser[info] = users[info][idx]
      return newUser;
    },{});
    return userInfo;
  };

  static save(userInfo){
    const users = this.#user;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  };
};

module.exports = UserStorage;