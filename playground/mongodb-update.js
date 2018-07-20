// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b50ff518fff19ff4ee5f786')
  }, {
      $set:{
        completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // update the user, inc the age by one and change the user's name
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b50f9170fb043006c9bfa9f')
  }, {
      $set:{
        name: "Zhaorui Ding"
    },

    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
