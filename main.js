const inputTitle = document.querySelector('.title__input');
const inputBody = document.querySelector('.body__input');
const formElement = document.querySelector('.form');
const todoList = document.querySelector('.todo__list');

let todoItemsElems = [];
let todos = [];

localStorage.length ? todos = JSON.parse(localStorage.getItem('todos')) : todos = []; 

class Tasks {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        // this.complited = false;
    }
}

function fillHtmlList() {
    todoList.innerHTML = '';
    if(todos.length > 0) {
        todos.forEach((item, index) => todoList.innerHTML += makeElement(item.title, item.body, index));
    }
    todoItemsElems = Array.from(todoList.children);
}

function updateLocal() {
   localStorage.setItem('todos', JSON.stringify(todos));
}

function createToDoItem() {
    JSON.parse(localStorage.getItem('todos'))
}

function deleteTasks(index) {
    todoItemsElems[index].classList.add('animation__class')
    setTimeout(() => {
        todos.splice(index, 1);
        updateLocal();
        fillHtmlList();
    }, 500)
}


function makeElement(title, body, index) {
    return `<li class="todo__item">
    <h2 class="title__item">${title}</h2>
    <div class="wrapper__item">
      <p class="discription">
        ${body}
      </p>
    <button onclick="deleteTasks(${index})" class="btn">Delete</button>
    </div>
</li>`
}

fillHtmlList();

formElement.addEventListener('submit', event => {
    event.preventDefault();
    let dataForm = new FormData(formElement);
    let inputTitleValue = dataForm.get('title__input');
    let inputBodyValue = dataForm.get('body__input');
    todos.push(new Tasks(inputTitleValue, inputBodyValue));
    updateLocal();
    fillHtmlList();
    event.target[0].value = '';
    event.target[1].value = '';
})

