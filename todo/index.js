var db = low('todo');
var todoList = db.get('list');

db.defaults({ list: [] })
  .write();

var input,
    send,
    list;

    init();


function init(){
    input = document.getElementById('input');
    send  = document.getElementById('send');
    list  = document.getElementById('list');

    load();
}

function load(){
    console.log('data load', todoList.value());

    todoList.value().map(function(item){
        list.appendChild( createTodo( item.content));        
    });

}



function sendTodo(){
    if(input.value === '')return;

    var data = input.value;
    input.value = '';

    list.appendChild(createTodo(data));

    var 
        size = todoList.size().value();
    
    todoList.push({ id : size, content: data }).write();

}



function createTodo(value){
    var node = document.createElement('li');

    node.innerHTML = value;
    node.onclick = removeTodo;
    return node;
}

function removeTodo(e){
    e.target.parentElement.removeChild(this);
}