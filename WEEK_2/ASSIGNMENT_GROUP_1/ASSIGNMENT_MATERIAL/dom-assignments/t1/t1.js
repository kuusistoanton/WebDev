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
    const todo = todoList[i];
    const html = `<li>
    <input type="checkbox" id="todo-${i+1}" ${todo.completed ? 'checked' : ''}/>
    <label for="todo-${i+1}">${todo.task}</label>
    </li>`;
    output.insertAdjacentHTML(
      'beforeend',
      html
    );
  }
})();