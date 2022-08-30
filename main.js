const inputTitle = document.querySelector('.title__input');
const inputBody = document.querySelector('.body__input');
const formElement = document.querySelector('.form');
let todos = [];

!localStorage.length ? todos = localStorage.getItem('todos', JSON.parse(todos)) : todos = []; 

class Tasks {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.complited = false;
    }
}

function addTaskToStorage() {
   localStorage.setItem('todos', JSON.stringify(todos));
}

function createToDoItem() {
    localStorage.getItem('todos',)
}

// inputTitle.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

// inputBody.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

formElement.addEventListener('submit', event => {
    event.preventDefault();
    let dataForm = new FormData(formElement);
    let inputTitleValue = dataForm.get('title__input');
    let inputBodyValue = dataForm.get('body__input');
    todos.push(new Tasks(inputTitleValue, inputBodyValue));
    event.target[0].value = '';
    event.target[1].value = '';
})