
import { getToDoArray } from "./toDoArray";
import { display } from "./displayFunction";

let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }
})


//when form is submitted after + click, we display the todos corresponding to the project 
//selected which is stored in index
function handlePlusClick(){

    let todos = document.querySelector('#todos');

    todos.textContent = '';

    let toDoArray = getToDoArray();

    display(toDoArray, index);
    
}

function handleProjectClick(event){

    let number = event.target.getAttribute('number');
    let toDoArray = getToDoArray();

    todos.textContent = '';

    display(toDoArray, number);
}


export {handlePlusClick, handleProjectClick};