class TodoItem {
    constructor(task) {
        this.id = Date.now();
        this.content = task;
        this.completed = false;
    }
}

function addTodo() {
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
async function completeTask(evt) {

    document.getElementById(evt.currentTarget.myParam).classList.add("completed");
    document.getElementById("iconFor"+evt.currentTarget.myParam).innerText = "✔️";
    var entries = await getEntries();
    
    var stutus = entries.findIndex(entry => entry.id === evt.currentTarget.myParam);
    entries[stutus].completed = true

  
    localStorage.setItem('test', JSON.stringify(entries));
}

async function deleteTask(evt) {
    document.getElementById(evt.currentTarget.myParam).remove();

    var entries = await getEntries();
    
    var deleteable = entries.find(entry => entry.id === evt.currentTarget.myParam);


    var updatedTasks = entries.filter(entry => entry !== deleteable);

    localStorage.setItem('test', JSON.stringify(updatedTasks));
}

async function saveEntry(entry) {

    var entries = await getEntries();

    var todoEntry = new TodoItem(entry);

    displayEntry(todoEntry, "all");
    entries.push(todoEntry);
    console.log(entries);

    localStorage.setItem('test', JSON.stringify(entries));
}

async function getEntries() {
    var entries = await JSON.parse(localStorage.getItem('test'));
    if (entries !== null) {
        return entries;
    } else {
        entries = [];
        return entries;
    }
}

async function startUp() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';

    var todos = await getEntries();
    
    displayCount(todos.filter(item => item.completed === false).length);

    if (todos !== null) {
        todos.forEach(todo => {
            displayEntry(todo);
        });
    } else {
    }

}

function displayCount(count) {
    var taskCount = document.getElementsByClassName('count');
    taskCount.innerHTML = '';

    if (count.length) {
        taskCount.innerText = count + "📝 Task Left!"
    } else {
        taskCount.innerText = count + "📝 Tasks Left"

    }
   
  }
    

function showError() {
    document.getElementById('err').innerText = "Enter some text!"
    setTimeout(function(){ document.getElementById('err').innerText = '' }, 3000);
}


async function activeTodos() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';
    var todos = await getEntries();
    displayCount(todos.filter(item => item.completed === false).length);

    if (todos !== null) {
        todos.filter(todo => todo.completed === false)
        .forEach(todo => {
            displayEntry(todo);
        });
    }
}

async function completedTodos() {
    document.getElementsByClassName('todoList')[0].innerHTML = '';
    var todos = await getEntries();
    
    displayCount(0);

    if (todos !== null) {
        todos.filter(todo => todo.completed === true)
        .forEach(todo => {
            displayEntry(todo);
        });
    }
}



startUp();