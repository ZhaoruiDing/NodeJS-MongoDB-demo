const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '5b59ef855492b200b8cd222411';

if (!ObjectID.isValid(id)){
    console.log('ID not valid');
}


// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return  console.log("ID not found!");
//     }
//     console.log("Todo by ID", todo);
// }).catch((e)=>console.log(e));

//!Attention! If your model name is 'User', the corresponding collection name in the mongodb should be 'users'.
User.findById('5b5a21dcbe07fcd1c1da6d9f').then((user)=>{
 if (!user){
     return console.log('Unable to find the user');
 }

 console.log(JSON.stringify(user,undefined, 2));
}, (e)=>{
    console.log(e);
});