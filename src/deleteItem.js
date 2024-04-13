import { deleteItem } from "./toDoArray";
let index = 0;

window.addEventListener('click', (event)=>{
    
    if(event.target.className == 'projectButton'){
        index = event.target.getAttribute("number");
        console.log(index);
    }
})