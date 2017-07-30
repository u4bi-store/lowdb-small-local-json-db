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
       { name : 'box', price : 400 },

       { name : 'box', price : 400 },

       { name : 'box', price : 400 },

       { name : 'box', price : 500 },

       { name : 'box', price : 500 }
       
   ]
};

db.setState(data);

console.log(db.getState());

console.log('items data ' , db.get('items').value());