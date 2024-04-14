// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project
import { display } from "./displayFunction";

let todos = document.querySelector('#todos')

let toDoArray = [
    [
        {
            title: "Gym",
            priority: "Medium",
            dueDate: "2-12-24",
            description: "Its Leg Day",
        },
        {
            title: "Work on Project",
            priority: "Medium",
            dueDate: "2-10-24",
            description: "Fix bugs"
        },
        {
            title: "Feed the cat",
            priority: "High",
            dueDate: "2-12-24",
            description: "Treat also!"
        }
    ]
];

function addProject(event){
    event.preventDefault();
    toDoArray.push([]);
    
}

function addToDo(index,object){

    toDoArray[index].push(object)
    console.log(toDoArray);

}

function getToDoArray(){

    return toDoArray;

}

function deleteObject(index, subIndex){

    toDoArray[index].splice(subIndex,1)
}

function onLoad(){
    window.addEventListener('load', ()=>{
        display(toDoArray, 0);
    })
}

export {addProject, onLoad, addToDo, getToDoArray, deleteObject};

