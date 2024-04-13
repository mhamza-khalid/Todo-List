import { handleSubmit } from "./addProject"; //manipulates the DOM
import { addProject } from "./toDoArray";
import { onLoad } from "./toDoArray";
import { handleModal } from "./addToDo";
import { handleToDoSubmit } from "./createObject";

import { handlePlusClick } from "./displayToDos";
import { handleProjectClick } from "./displayToDos";

//adds a new project when user hits add project
let projectForm = document.querySelector('#addProjectForm');
projectForm.addEventListener('submit', handleSubmit);

projectForm.addEventListener('submit', addProject);


//on initial page load

onLoad();

//show modal on clicking add new todo

let addToDo = document.querySelector('#addToDo');
addToDo.addEventListener('click', handleModal)

//create todo
let form = document.querySelector('.form');
form.addEventListener('submit', handleToDoSubmit)


//on clicking add new todo

form.addEventListener('submit', handlePlusClick);

//on project click
window.addEventListener('click', (event)=>{
    if(event.target.className == "projectButton"){

        //display todos of clicked project
        handleProjectClick(event);

        //add background color to selected project
        let buttons = document.querySelectorAll('.projectButton')
        buttons.forEach((button)=>{
            button.style.backgroundColor = '#d3d3d3';
        })
        event.target.style.backgroundColor = '#a8d9da'
    }
})





