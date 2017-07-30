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
        list.appendChild(createTodo(item.id, item.content));
    });

}



function sendTodo(){
    if(input.value === '')return;

    var data = input.value,
        id = todoList.size().value();

    input.value = '';

    list.appendChild(createTodo(id, data));

    todoList.push({ id : id, content: data }).write();

}



function createTodo(id, value){
    var node = document.createElement('li');

    node.innerHTML = value;
    node.dataset.id = id;

    node.onclick = removeTodo;
    return node;
}

function removeTodo(e){
    console.log(e.target.dataset.id);
    
    e.target.parentElement.removeChild(this);
}