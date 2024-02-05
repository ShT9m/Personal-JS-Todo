const addTasks = (task) => {
  const addTask = document.getElementById('add-task');
  document.getElementById('add-task') = '';

  const li = document.createElement('li');
  li.textContent = task;

  const complete = document.createElement('button');
  completeButton.innerHTML = 'Complete'
}

document.getElementById('add-btn');
document.addEventListener('click', () => addTasks());
