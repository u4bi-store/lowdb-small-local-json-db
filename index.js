var db = low('db');

console.log(db);


var data = {
    users : [
        { name : 'test', age : 16 },

        { name : 'test', age : 16 },

        { name : 'test', age : 16 },

        { name : 'test', age : 17 },

        { name : 'test', age : 17 }
        
    ],

   items : [
       { name : 'box', price : 300 },

       { name : 'box', price : 200 },

       { name : 'box', price : 100 },

       { name : 'weapon', price : 500 },

       { name : 'weapon', price : 500 }
       
   ]
};

db.setState(data);

console.log(db.getState());

console.log('items data ' , db.get('items').value());


/* filter
*/
console.log('items filter', db.get('items')
    .filter({ name : 'box' })
    .sortBy('price')
    // .take(2)
    .value());