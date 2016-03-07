// a empty user list
var users = [];

users.push({
  first_name: 'Jack',
  last_name: 'Bradshaw'},
  {first_name: 'Callum',
  last_name: 'Bradshaw'},
  {first_name: 'Neil',
  last_name: 'Bradshaw'
  });

users.forEach(function(name) {
  console.log("Hi," + " " + name.first_name + " " + name.last_name + '!');
});

//







//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method

//Hi, first_name last_name!
