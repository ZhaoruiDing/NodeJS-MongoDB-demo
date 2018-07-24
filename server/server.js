var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });


// var Todo = mongoose.model('Todo', {
//     text:{
//         type: String
//     },

//     completed:{
//         type: Boolean
//     },
    
//     completedAt:{
//         type: Number
//     }
// });


// //save something
// var newTodo = new Todo({
//     text: 'Cook Dinner' 
// });

// newTodo.save().then((doc)=>{
//     console.log('save Todo', doc);
// }, (e)=>{
//     console.log("Unable to save todo")
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });


// otherTodo.save().then((doc)=>{
//     console.log(doc);
// }, (e)=>{
//     console.log('Unable to save');
// });

//User
//email - require it - trim it - set type - set min len of 1

var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: "zhaorui@example.com"
});

user.save().then((doc)=>{
    console.log('User saved', doc);
}, (e)=>{
    console.log("Unable to save", e);
});