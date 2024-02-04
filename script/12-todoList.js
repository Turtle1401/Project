const TodoList = [{
  name : 'make dinner',
  dueDate : '2022-12-22'
},{
  name : 'learn JavaScript',
  dueDate : '2022-8-6'
}];

renderTodoList();

function renderTodoList(){ 
  let todoListHTML = '';

  TodoList.forEach(function(TodoObject,index){
    const name = TodoObject.name;
    const Duedate = TodoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${Duedate}</div>
      <button 
      onclick="TodoList.splice(${index},1);
      renderTodoList();"
      class="decor-delete"
      >Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-button').addEventListener('click', () =>{
  Todo();
});

function Todo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const duedate = dateInputElement.value;
  

  TodoList.push({
    name : name,
    dueDate : duedate
  });


  inputElement.value = ''; // delete after print todo
    renderTodoList();
}

// practice 2
/*
const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i=0 ; i<todoList.length;i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
*/
function Enter(event){
  if(event.key === 'Enter'){
    Todo();
  }
}
