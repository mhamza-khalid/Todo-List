// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project
import { display } from "./displayFunction";



let toDoArray = [
    [
        
    ]
];

function addProject(){
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

    // toDoArray[index].splice(subIndex,1)

    let array = JSON.parse(localStorage.getItem("todoArray"));
    array[index].splice(subIndex,1)
    localStorage.setItem("todoArray", JSON.stringify(array))
    
}



export {addProject, addToDo, getToDoArray, deleteObject};

