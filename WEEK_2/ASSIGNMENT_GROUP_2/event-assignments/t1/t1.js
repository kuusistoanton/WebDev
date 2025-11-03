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


const output = document.getElementsByTagName('ul')[0];
for (let i = 0; i < todoList.length; i++) {
  const list = document.createElement('li');
  const checkInput = document.createElement('input');
  const deleteInput = document.createElement('input');


  checkInput.type = 'checkbox';
  checkInput.id = `todo-${i + 1}`;
  if (todoList[i].completed) {
    checkInput.checked = true;
  }

  checkInput.addEventListener('change', function () {
    todoList[i].completed = this.checked;
    console.log(`${todoList[i].task} completed status: ${todoList[i].completed}`);
  });

  deleteInput.type = 'button';
  deleteInput.value = 'Delete';
  deleteInput.id = `${i + 1}`;
  deleteInput.addEventListener('click', function () {
    for (let j = 0; j < todoList.length; j++) {
      if (todoList[j].id === parseInt(this.id)) {
        todoList.splice(j, 1);
        break;
      }
    }
    output.removeChild(list);
    console.log(`Deleted: ${todoList[i] ? todoList[i].task : 'item'}`);
    console.log('Updated todo list:', todoList);
  });

  const label = document.createElement('label');
  label.htmlFor = `todo-${i + 1}`;
  label.textContent = todoList[i].task;
  list.appendChild(checkInput);
  
  list.appendChild(label);
  list.appendChild(deleteInput);
  output.appendChild(list);
}

  


function openModal() {
  // create overlay
  const overlay = document.createElement('div');
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '10000',
  });

  // create modal container
  const modal = document.createElement('div');
  Object.assign(modal.style, {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '6px',
    minWidth: '280px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  });

  const title = document.createElement('h3');
  title.textContent = 'Add new todo';
  title.style.marginTop = '0';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter todo name';
  Object.assign(input.style, {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    boxSizing: 'border-box',
  });

  const btnRow = document.createElement('div');
  btnRow.style.display = 'flex';
  btnRow.style.justifyContent = 'flex-end';
  btnRow.style.gap = '8px';

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.textContent = 'Cancel';

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.textContent = 'Save';

  btnRow.appendChild(cancelBtn);
  btnRow.appendChild(saveBtn);

  modal.appendChild(title);
  modal.appendChild(input);
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  input.focus();

  // close modal helper
  const closeModal = () => {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  };

  // close on cancel or clicking outside modal
  cancelBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // helper to create and append a todo element (follows existing pattern)
  function createTodoElement(todo) {
    const list = document.createElement('li');
    const checkInput = document.createElement('input');
    const deleteInput = document.createElement('input');

    checkInput.type = 'checkbox';
    checkInput.id = `todo-${todo.id}`;
    if (todo.completed) {
      checkInput.checked = true;
    }

    checkInput.addEventListener('change', function () {
      todo.completed = this.checked;
      console.log(`${todo.task} completed status: ${todo.completed}`);
    });

    deleteInput.type = 'button';
    deleteInput.value = 'Delete';
    deleteInput.id = `${todo.id}`;
    deleteInput.addEventListener('click', function () {
      for (let j = 0; j < todoList.length; j++) {
        if (todoList[j].id === parseInt(this.id)) {
          todoList.splice(j, 1);
          break;
        }
      }
      output.removeChild(list);
      console.log(`Deleted: ${todo.task}`);
      console.log('Updated todo list:', todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = checkInput.id;
    label.textContent = todo.task;

    list.appendChild(checkInput);
    list.appendChild(label);
    list.appendChild(deleteInput);
    output.appendChild(list);
    return list;
  }

  // save new todo
  saveBtn.addEventListener('click', function () {
    const text = input.value.trim();
    if (!text) {
      input.focus();
      return;
    }

    const newId = todoList.reduce((max, t) => Math.max(max, t.id || 0), 0) + 1;
    const newTodo = {
      id: newId,
      task: text,
      completed: false,
    };

    todoList.push(newTodo);
    createTodoElement(newTodo);
    console.log('Added new todo:', newTodo);
    console.log('Updated todo list:', todoList);
    closeModal();
  });
}