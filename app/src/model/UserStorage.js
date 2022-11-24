"use strict";


const db = require("../config/db")



// # 붙여서 외부에서 접근할 수 없도록 private화 해준다
class UserStorage {

  static getUserInfo(id) {
    return new Promise((resolve, reject)=>{
      const query = "SELECT * FROM abc WHERE id = ?;"
      db.query(query, [id], (err, data)=>{
        if(err) reject(`${err}`)
        else resolve(data[0]);
      });
    });    
  };  

  static async save(userInfo){
    return new Promise((resolve, reject)=>{
      const query = "INSERT INTO users(id, name, psword) VALUES(?,?,?);"
      db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err)=>{
        if(err) reject(`${err}`)
        else resolve({ success : true});
      });
    });   
  };

};

module.exports = UserStorage;