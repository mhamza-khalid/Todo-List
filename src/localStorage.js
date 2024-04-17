import { addProject } from './toDoArray';

function populateProjectsStorage(projectName){

    if (!localStorage.getItem("projectArray")) 
       {
           let projectArray = [];
           localStorage.setItem("projectArray", JSON.stringify(projectArray))
       }  

   let array = JSON.parse(localStorage.getItem("projectArray"))
   array.push(projectName);
   localStorage.setItem("projectArray", JSON.stringify(array))
}


function loadProjectsFromStorage(){
    if (!localStorage.getItem("projectArray")){
        return
    }

    else {
        let array = JSON.parse(localStorage.getItem("projectArray"));

        let parent = document.querySelector('#projectButtons');
        let projectForm = document.querySelector('#addProjectForm');

        addProjectArray();
        array.forEach((element, index)=>{
            
            addProject();
            let newProject = document.createElement('button');
            newProject.setAttribute('number', index+1);
            newProject.classList.add('projectButton');

            newProject.textContent = element;

            parent.appendChild(newProject);
            projectForm.reset();
        })
    }
}

function populateToDoArrayStorage(index,todo){
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

    array[index].push(todo);

    localStorage.setItem("todoArray", JSON.stringify(array))

}

function addProjectArray(){
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
    array.push([]);
    localStorage.setItem("todoArray", JSON.stringify(array))
}

export {loadProjectsFromStorage , populateProjectsStorage, populateToDoArrayStorage}