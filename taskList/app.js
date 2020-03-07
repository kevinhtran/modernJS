// Define UI Variables
const form = document.querySelector('#task-form'); // you can use getElementById if you want // this is the the entire new task, add task, task list form
const taskList = document.querySelector('.collection'); // this is the ul
const clearBtn = document.querySelector('.clear-tasks'); // the clear tasks button
const filter = document.querySelector('#filter'); // where you input a filter task
const taskInput = document.querySelector('#task'); // where you input a new task

// Load all event listeners
loadEventListeners();


// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
// Note: in materialize CDN, your ul will have a class of "collection" and your li will have a class of "collection-item"

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  // Note: Appending in JS is a way to insert content to the end of already existing elements
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  // secondary-content will allow you to have something over to the right
  link.className = 'delete-item secondary-content';
// Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
// Append the link to li
  li.appendChild(link);

// Append li to ul
  taskList.appendChild(li);

// Clear input
  taskInput.value = '';

  e.preventDefault();
}