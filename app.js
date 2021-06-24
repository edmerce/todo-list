/*
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
*/

let todos = ["item1", "item2", "item3"];

function add(todo) {
  todos.push(todo);
  console.log(todos);
}

function edit(index, newValue) {
  todos[index] = newValue;
  console.log(todos);
}

function remove(index) {
  todos.splice(index, 1);
  console.log(todos);
}

edit(0, "item1 updated");
remove();