/*
Version 10
[x] Each todo should its own remove button
[x] The remove buttons should actually work

Version 9
[x] There should be an li for each todo
[x] Each li should show the todoText property
[x] Each li should show the completed property

Version 8
[x] There should be a working button for adding a todo
[x] There should be a working button for editing a todo
[x] There should be a working button for removing a todo
[x] There should be a working button for toggling a todo

Version 7
[x] It should have a displayTodos button.
[x] The displayTodos button should run the displayTodos function
[x] It should have a toggleAll button
[x] The toggleAll button should run the toggleAll function

Version 6
[x] It should have a function for toggling all todos
[x] If everything is false ==> change everything to true
[x] If everything is true ==> change everything to false
[x] If mixed ==> change everything to true

Version 5
[x] It should have a function for displaying todos
[x] displayTodos should show the todoText property
[x] displayTodos should show the completed property

Version 4
[x] It should have a function to toggle a todo

Version 3
[x] We should initialize the todos variable with objects
[x] The add function should add objects
[x] The edit function should edit objects
[x] It should have a function to toggle a todo

Version 2
[x] It should have a function to add a todo
[x] It should have a function to edit a todo
[x] It should have a function to remove a todo

Version 1
[x] It should have a place to store todos
[x] It should have a way to display todos
[x] It should have a way to add a todo
[x] It should have a way to edit a todo
[x] It should have a way to remove a todo

——————————————————————————————————————————
*/

let todos = [
  {todo: 'item1', completed: false},
  {todo: 'item2', completed: false},
  {todo: 'item3', completed: false}
];

displayTodos();

function add() {
  let initialTodoText = addInput.value;
  todos.push({todo: initialTodoText, completed: false});
  addInput.value = '';
  displayTodos();
}

function edit() {
  let position = editPositionInput.value;
  let newTodoText = editTextInput.value;
  todos[position].todo = newTodoText;
  editPositionInput.value = '';
  editTextInput.value = '';
  displayTodos();
}

function remove() {
  let position = removeInput.value;
  todos.splice(position, 1);
  removeInput.value = '';
  displayTodos();
}

function toggle() {
  let position = toggleInput.value;
  if(todos[position].completed === false) {
    todos[position].completed === true;
  } else {
    todos[position].completed === false;
  }

  toggleInput.value = '';
  displayTodos();
}

function displayTodos() {

  let todosUl = document.getElementById('todos-ul');

  //clear out any existing li(s) in todosUl.
  todosUl.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    let todoLi = document.createElement('li');

    if(todos[i].completed === true) {
      todoLi.innerText = '[x]' + todos[i].todoText;
    } else {
      todoLi.innerText = '[ ] ' + todos[i].todoText;
    }

    todosUl.appendChild(todoLi);
  }
}

function toggleAll() {

  let completedTodo = 0;

  for (let i = 0; i < todos.length; i++) {
    if(todos[i].completed === true) {
      completedTodo++;
    }
  }
  if(completedTodo === todos.length) {
    for (let i = 0; i < todos.length; i++) {
      todos[i].completed === false;
    }
  } else {
    for (let i = 0; i < todos.length; i++) {
      todos[i].completed === true;
    }
  }

  displayTodos();
}

const toggleAllButton = document.getElementById('toggle-all-button');
toggleAllButton.addEventListener('click', toggleAll);

const addButton = document.getElementById('add-button');
const addInput = document.getElementById('add-input');
addButton.addEventListener('click', add);

const editButton = document.getElementById('edit-button');
const editPositionInput = document.getElementById('edit-position-input');
const editTextInput = document.getElementById('edit-text-input');
editButton.addEventListener('click', edit);

const removeButton = document.getElementById('remove-button');
const removeInput = document.getElementById('remove-input');
removeButton.addEventListener('click', remove);

const toggleButton = document.getElementById('toggle-button');
const toggleInput = document.getElementById('toggle-input');
toggleButton.addEventListener('click', toggle);


