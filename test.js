
// class a {
//   constructor(name, age){
//     this.name = name
//     this.age =  age
//   }
  
//   printThis() {
//     console.log(this)
//     setTimeout(()=>{
//       console.log(this)
//     }, 1000)
//     setTimeout(function(){
//       console.log(this)
//     }, 2000)
//   }
// }

// let a1 = new a('j', 28);

// a1.printThis()


// let person = {
//   name: '짐코딩',
//   printThis: function(){
//     console.log(this)
//     setTimeout(()=>{
//       console.log(this)
//     }, 1000)
//     setTimeout(function(){
//       console.log(this)
//     }, 2000)
// 	}
// };

// person.printThis()



const {id, name} = {id:'jang', name:"장"}

console.log(id)