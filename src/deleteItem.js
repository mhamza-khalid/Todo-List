import { deleteObject } from "./toDoArray";
import { getToDoArray } from "./toDoArray";
import { display } from "./displayFunction";

let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
    }

})


function deleteItem(event){

    let todos = document.querySelector('#todos')

    let childrenTemp = todos.children;
    let children = Array.from(childrenTemp)
    console.log(children)    // get child elemnts of todos, i.e all todo cards

    let temp = event.target.parentNode;
    let parent = temp.parentNode;     // get the single todo card that wants to be deleted

    console.log(parent);

    for (let i = 0 ; i < children.length; ++i){

        // check at which subindex (i) this card was in todoarray[index]
        // and remove it from todoarray and call display again for rerender
        if( children[i] === parent){

            console.log(i);
            let subindex;
            subindex = i;
            deleteObject(index, subindex)

            // let todoArray = getToDoArray();
            let array = JSON.parse(localStorage.getItem("todoArray"));

            todos.textContent = '';
            
            display(array, index);

        }
    }

}

export { deleteItem }


