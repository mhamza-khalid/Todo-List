import { deleteObject } from "./toDoArray";
import { getToDoArray } from "./toDoArray";
import { display } from "./displayFunction";

let index = 0;

let editIndex = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }

})


function editTodo(event){

    let modal = document.querySelector('#edit--modal');
    
    let todos = document.querySelector('#todos');
    let childrenTemp = todos.children;
    let children = Array.from(childrenTemp)
    console.log(children)    // get child elemnts of todos, i.e all todo cards

    let temp = event.target.parentNode;
    let parent = temp.parentNode;     // get the single todo card that wants to be deleted

    console.log(parent);

    let title = document.querySelector('#edit--title');
    let priority = document.querySelector("#edit--priority");
    let description = document.querySelector('#edit--description');
    let dueDate = document.querySelector('#edit--dueDate'); 

    for (let i = 0 ; i < children.length; ++i){

        // check at which subindex (i) this card was in todoarray[index]
        // and remove it from todoarray and call display again for re render
        if( children[i] === parent){

            let array = getToDoArray();
            editIndex = i;

            title.value = array[index][i].title;
            priority.value = array[index][i].priority;
            description.value = array[index][i].description;
            dueDate.value = array[index][i].dueDate;

            // deleteObject(index,i);
            break;
            
        }

        
    }
    let form = document.querySelector('.edit--form');

            form.addEventListener('submit', (event)=>{

            event.preventDefault();
            let array = getToDoArray();

            array[index][editIndex].title = title.value;
            array[index][editIndex].priority = priority.value;
            array[index][editIndex].description = description.value;
            array[index][editIndex].dueDate = dueDate.value;

            todos.textContent = '';
            display(array, index);
            modal.close();
            
    })

    modal.showModal();
    
}



export { editTodo }