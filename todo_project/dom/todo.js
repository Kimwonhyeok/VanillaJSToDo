const getTaskForm = document.querySelector('.task-form');
const getTask = document.querySelector('#task');

const ulTag = document.querySelector('#todo-list');
const TODO_KEY = "todo";
let list = [];


function save(){
    localStorage.setItem(TODO_KEY,JSON.stringify(list));
}

function deleteTask(event){
    const li = event.target.parentElement;
    li.remove();
    list = list.filter((list)=> list.id!==parseInt(li.id));
    console.log(list);
    save();
}

function showToDo(newTask){
    const li = document.createElement('li');
    li.id = newTask.id;
    const div = document.createElement('div');
    div.innerText = newTask.text;
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click',deleteTask);
    div.addEventListener('click',lineWrite);
    li.appendChild(div);
    li.append(button);
    ulTag.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTask = getTask.value;
    getTask.value = "";
    const todoObj = {
        text:newTask,
        id:Date.now(),
    }
    list.push(todoObj);
    showToDo(todoObj);
    save();
}

function lineWrite(event){
    const div = event.target;
    div.classList.toggle('lines');
}

getTaskForm.addEventListener("submit",handleToDoSubmit);


const savedToDo = localStorage.getItem(TODO_KEY);

if(savedToDo!==null){
    const parsedTodo = JSON.parse(savedToDo);
    list = parsedTodo;
    parsedTodo.forEach(showToDo)
}


