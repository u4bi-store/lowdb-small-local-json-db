var db = low('db');

console.log(db);


var data = {
    users : [
        { id : 1, name : 'Jan', age : 16 },

        { id : 2, name : 'Ben', age : 16 },

        { id : 3, name : 'Han', age : 16 },

        { id : 4, name : 'San', age : 17 },

        { id : 5, name : 'Kan', age : 17 }
        
    ],

   items : [
       { name : 'box', price : 300 },

       { name : 'box', price : 200 },

       { name : 'box', price : 100 },

       { name : 'weapon', price : 500 },

       { name : 'weapon', price : 500 }
       
   ]
};

// db.setState(data);

console.log(db.getState());

console.log('items data ' , db.get('items').value());


/* filter
*/
console.log('items filter', db.get('items')
    .filter({ name : 'box' })
    .sortBy('price')
    // .take(2)
    .value());


/* map
*/
console.log('users map' ,db.get('users')
    .map('name')
    .value());


/* get object path
*/
console.log('users[0]', db.get('users[0]').value());
console.log('users[0].name', db.get('users[0].name').value());

/* find
*/
console.log('find', db.get('users')
    .find({ id : 1 })
    .value());

/* assign : update
*/
console.log('assign',db.get('users')
    .find({ id : 1})
    .assign({ name : 'Dan'})
    .write());
    
console.log(db.get('users[0].name').value());