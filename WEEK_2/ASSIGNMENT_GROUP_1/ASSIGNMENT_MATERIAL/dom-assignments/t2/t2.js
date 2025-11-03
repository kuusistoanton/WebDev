// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

(function () {
  const output = document.getElementsByTagName('ul')[0];
  for (let i = 0; i < todoList.length; i++) {
    const list = document.createElement('li');
    const input = document.createElement('input');

    input.type = 'checkbox';
    input.id = `todo-${i + 1}`;
    if (todoList[i].completed) {
      input.checked = true;
    }

    const label = document.createElement('label');
    label.htmlFor = `todo-${i + 1}`;
    label.textContent = todoList[i].task;
    list.appendChild(input);
    list.appendChild(label);
    output.appendChild(list);
  }
})();