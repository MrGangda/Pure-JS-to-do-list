const inputTitle = document.querySelector('.title__input');
const inputBody = document.querySelector('.body__input');
const formElement = document.querySelector('.form');
const todoList = document.querySelector('.todo__list')

let todos = [];

localStorage.length ? todos = JSON.parse(localStorage.getItem('todos')) : todos = []; 

class Tasks {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.complited = false;
    }
}

function addElementToDom() {
    todoList.innerHTML = '';
    todos.forEach(item => todoList.innerHTML += makeElement(item.title, item.body))
}

function addTaskToStorage() {
   localStorage.setItem('todos', JSON.stringify(todos));
}

function createToDoItem() {
    JSON.parse(localStorage.getItem('todos'))
}

function deleteTasks() {
    console.log('Cicked')
}

// inputTitle.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

// inputBody.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

function makeElement(title, body) {
    return `<li class="todo__item">
    <h2 class="title__item">${title}</h2>
    <div class="wrapper__item">
      <p class="discription">
        ${body}
      </p>
    <button onclick="deleteTasks()" class="btn">Delete</button>
    </div>
</li>`
}

addElementToDom();

formElement.addEventListener('submit', event => {
    event.preventDefault();
    let dataForm = new FormData(formElement);
    let inputTitleValue = dataForm.get('title__input');
    let inputBodyValue = dataForm.get('body__input');
    todos.push(new Tasks(inputTitleValue, inputBodyValue));
    addTaskToStorage();
    addElementToDom();
    event.target[0].value = '';
    event.target[1].value = '';
})

