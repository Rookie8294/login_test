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

  static #getUsers(data, isAll, fields){
    const users = JSON.parse(data)
    if(isAll) return users
    const newUsers = fields.reduce((newUsers, field)=>{
      if(users.hasOwnProperty(field)) {
        newUsers[field]  = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  // #을 붙여 은닉화 후 매서드를 사용하여 값을 받아온다
  static getUser(isAll, ...fields) {
    return fs.readFile('./src/databases/users.json')
      .then((data)=>{
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);   
    // const users = this.#user;
    
  };

  static getUserInfo(id) {
    return fs.readFile('./src/databases/users.json')
      .then((data)=>{
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);   
  };

  

  static async save(userInfo){

    const users = await this.getUser(true);
    if(users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다."
    }
    users.id.push(userInfo.id);
      users.name.push(userInfo.name)
      users.psword.push(userInfo.psword)
      fs.writeFile('./src/databases/users.json', JSON.stringify(users))
      return {success: true}

    
    // // const users = this.#user;
    // users.id.push(userInfo.id);
    // users.name.push(userInfo.name);
    // users.psword.push(userInfo.psword);
    // return { success: true };
  };
};

module.exports = UserStorage;