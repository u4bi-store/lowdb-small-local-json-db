var db = low('todo');

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
    console.log('data load');
}

function sendTodo(){
    if(input.value === '')return;

    var data = input.value;
    input.value = '';

    list.appendChild(createTodo(data));

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