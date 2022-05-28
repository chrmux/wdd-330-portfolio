import addTodo from './utilutil.js';
import DefaultExport from 'bar.js';

class TodoItem {
    constructor(task) {
        this.id = Date.now();
        this.content = task;
        this.completed = false;
    }
    
    addTodo() {
        
    }

    saveTodo() {

    }

    completeTodo() {

    }

    removeTodo() {

    }

    filterTodo() {
        
    }
}


module.exports =  {
        TodoItem, 
}