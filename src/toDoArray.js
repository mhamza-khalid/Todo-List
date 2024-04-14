// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project
import { display } from "./displayFunction";



let toDoArray = [
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

