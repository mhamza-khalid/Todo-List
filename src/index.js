import { handleSubmit } from "./addProject"; //manipulates the DOM
import { addProject } from "./toDoArray";
import { onLoad } from "./toDoArray";
import { handleModal } from "./addToDo";
import { handleToDoSubmit } from "./createObject";

import { handlePlusClick } from "./displayToDos";
import { handleProjectClick } from "./displayToDos";

import { deleteItem } from "./deleteItem";
import { editTodo } from "./editItem";

import { loadProjectsFromStorage } from "./localStorage";
import { display } from "./displayFunction";

import { changeColor } from "./projectColor";


let deleteButton;
//adds a new project when user hits add project
let projectForm = document.querySelector('#addProjectForm');

// projectForm.addEventListener('submit', addProject);
projectForm.addEventListener('submit', handleSubmit);


//on initial page load

// onLoad();

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
    }
})


window.addEventListener('mouseover', (event)=>{

    if(event.target.className == 'delete'){ 
        deleteButton = document.querySelectorAll('.delete');

        deleteButton.forEach((button)=>{

            button.addEventListener('click', deleteItem)

        })
    }
})

window.addEventListener('click', (event)=>{

    if(event.target.className == 'edit'){ 
        let editButton = document.querySelectorAll('.edit');

        editButton.forEach((button)=>{

            button.addEventListener('click', editTodo(event))

        })
    }
})

window.addEventListener('click', (event)=>{
    if(event.target.className == 'projectButton'){
        changeColor(event);
    }
})
window.addEventListener('load', loadProjectsFromStorage)

//on loading page display Default Project Folder
window.addEventListener('load', ()=>{


    if (!localStorage.getItem("todoArray"))
    {   
        let todoArray = [
            [
             {
             title: "Gym",
             priority: "Medium",
             dueDate: "2024-04-10",
             description: "Its Leg Day",
             },
             { 
             title: "Work on Project",
             priority: "Medium",
             dueDate: "2024-04-12",
             description: "Fix bugs"
             },
             {
             title: "Feed the cat",
             priority: "High",
             dueDate: "2024-04-24",
             description: "Treat also!"
             }
          ]
        ]
        localStorage.setItem("todoArray", JSON.stringify(todoArray))
    }
    let array = JSON.parse(localStorage.getItem("todoArray"));

    let button = document.querySelector('#default');

    button.style.backgroundColor = '#a8d9da';
    display(array, 0);
})







        // //add background color to selected project
        // let buttons = document.querySelectorAll('.projectButton')
        // buttons.forEach((button)=>{
        //     button.style.backgroundColor = '#d3d3d3';
        // })
        // event.target.style.backgroundColor = '#a8d9da'







