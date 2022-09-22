document.addEventListener("DOMContentLoaded", () => {

  const btn = document.createElement('button')
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('new-task-description');
    addToDo(input.value);
    input.value = "";
  })

  const addToDo = (text) => {
    const newItem = document.createElement('p')
    newItem.textContent = ` ${text}  `;
    const btn = document.createElement('button')
    btn.textContent = " delete "
    btn.addEventListener('click', deleteToDo);
    newItem.appendChild(btn);
    taskList.appendChild(newItem);
  }

  function deleteToDo(e) {
    console.log(e);
    e.target.parentNode.remove();
  }

});
