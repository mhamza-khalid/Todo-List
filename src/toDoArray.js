// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project
import { display } from "./displayFunction";

let todos = document.querySelector('#todos')

let toDoArray = [
    [
        {
            title: "Gym",
            priority: "High",
            dueDate: "2-12-24",
            description: "Its Leg Day"
        },
        {
            title: "Work on Project",
            priority: "Medium",
            dueDate: "2-10-24",
            description: "Fix bugs"
        }
    ]
];

function addProject(event){
    event.preventDefault();
    toDoArray.push([]);
    console.log(toDoArray);
}

function addToDo(index,object){

    toDoArray[index].push(object)

}

function getToDoArray(){

    return toDoArray;

}

function deleteItem(){

}

function onLoad(){
    window.addEventListener('load', ()=>{
        display(toDoArray, 0);
    })
}

export {addProject, onLoad, addToDo, getToDoArray, deleteItem};

