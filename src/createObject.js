import { addToDo } from "./toDoArray";
import { populateToDoArrayStorage } from "./localStorage";

let form = document.querySelector('.form');

let todo;
let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
        console.log(index);
    }
})

function handleToDoSubmit(){

    let title = document.querySelector('#title').value;
    let priority = document.querySelector("#priority").value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#dueDate').value; 
    
    todo = createTodoObject(title, priority, description, dueDate);
    console.log(todo);

    addToDo(index, todo);
    populateToDoArrayStorage(index,todo);
    form.reset();
}

function createTodoObject(title, priority, description, dueDate){

    return {
        title: title,
        priority : priority,
        description: description,
        dueDate: dueDate
    }

}

export { handleToDoSubmit };