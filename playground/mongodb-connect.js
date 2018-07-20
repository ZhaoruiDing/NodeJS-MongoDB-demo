// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }


  console.log('Connected to MongoDB Server');
  // db.collection("Todos").insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   /*
  //     param1: there is only one obj inserted
  //     param2: there is no filter
  //     param3: indentation
  //   */
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })


  // db.collection('Users').insertOne({
  //   name: 'Zhaorui',
  //   age: 20,
  //   location: 'Urbana'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
