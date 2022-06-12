function addTodo() {
    // Get the entry
    var todoEntry = document.getElementById("todoEntry").value;
    
    if (todoEntry !== '') {
        saveEntry(todoEntry);
    } else {
        showError();
    }
    document.getElementById("todoEntry").value = '';
}

function displayEntry(todo) {


    var todoItemDiv = document.createElement('div');
    todoItemDiv.setAttribute('class', 'todoItem');
    todoItemDiv.setAttribute('id', todo.id)

    var spanIconComplete = document.createElement("span");
    spanIconComplete.setAttribute('class', 'material-icons');
    spanIconComplete.innerHTML = "☐";
    spanIconComplete.setAttribute("id", "iconFor"+todo.id)
    spanIconComplete.myParam = todo.id;
    
    var taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task');
    taskDiv.innerText = todo.content;

    var endBtn = document.createElement('span');
    endBtn.setAttribute('class', 'material-icons');
    endBtn.innerText = "delete";
    endBtn.addEventListener('click', deleteTask, false);
    endBtn.myParam = todo.id;
    
    if (todo.completed){
        todoItemDiv.classList.add("completed");
        spanIconComplete.innerHTML = "✔️";
        

    } else {
        spanIconComplete.addEventListener('click', completeTask, false);
    }

    
    todoItemDiv.appendChild(spanIconComplete);
    todoItemDiv.appendChild(taskDiv);
    todoItemDiv.appendChild(endBtn);

    document.getElementsByClassName('todoList')[0].appendChild(todoItemDiv);

}