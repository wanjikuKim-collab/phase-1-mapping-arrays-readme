const originalNumbers = [1,2,3,4,5];

// ES5 version
// function map(array, callback){
//     //create a new array
//     const newArray = []
//     //iterate over each element in the passed array
//     for(const item of array){
//         newArray.push(callback(item))
//     }
//     return newArray
// }

//ES5 version using map(array, anonymousFunction)
// let squaredNumbers = map(originalNumbers, function (num) {
//     return num * num;
//   })

//alternative using array.map(arrow function)
let numbersSquared = originalNumbers.map(num=> num*num)
console.log('original and squared numbers')
console.log(originalNumbers);
console.log(numbersSquared);


const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];

// We need to create a list of recently onboarded engineers. 
//First off, we need to flip each new engineer's account from a normal user to an admin:


//here we use the array.prototype.map() method
const flipAccessLevel = oldAccounts.map(account=>{
  //first we create a copy of the original array in a new array usin Object.assign() to avoid mutating the original array
  let newAccount = Object.assign({},account)
  // we change the newAccount accessLevel using dot notation 
  newAccount.accessLevel = 'admin'
  return newAccount
})
console.log('new access level - admin')
console.log(flipAccessLevel)

//alternative
// const newEngineers = map(oldAccounts, function (account) {
//   return Object.assign({}, account, { accessLevel: "admin" });
// });



//Next, we just need a simple array of the new engineers' userIDs 
//that we can shoot over to the system administrator:

//this function will give an array of user ID only
const userIDs = flipAccessLevel.map(user=>user.userID)
console.log('userIDs')
console.log(userIDs)


// we now equip the new engineers with laptops
const equippedEngineers = flipAccessLevel.map(eng => {
  let newEquippedEngineers = Object.assign({},eng)
  newEquippedEngineers.equipment = 'Laptop'
  return newEquippedEngineers
  // return Object.assign({}, eng, { equipment: "Laptop" });
});

console.log('New engineers equiped with laptops')
console.log(equippedEngineers);