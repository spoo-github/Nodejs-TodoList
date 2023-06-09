document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTask);
  
    var taskList = document.getElementById('taskList');
    taskList.addEventListener('click', handleTaskClick);
  });
  
  function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      var taskItem = document.createElement('li');
      taskItem.innerText = taskText;
  
      var taskList = document.getElementById('taskList');
      taskList.appendChild(taskItem);
  
      taskInput.value = '';
    }
  }
  
  function handleTaskClick(event) {
    var target = event.target;
  
    if (target.tagName === 'LI') {
      target.classList.toggle('completed');
    } else if (target.tagName === 'BUTTON') {
      target.parentNode.remove();
    }
  }
  