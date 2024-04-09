import './style.css';

let parent = document.querySelector('#projects');
let projectForm = document.querySelector('#addProjectForm');
let number = 1;  // number attribute

function handleSubmit(event){
    event.preventDefault();

    let newProject = document.createElement('button');
    newProject.setAttribute('number', number);

    ++number;

    let projectName = document.querySelector('#inputProject').value;

    newProject.textContent = projectName;

    parent.insertBefore(newProject, projectForm);

    projectForm.reset();
}

export {handleSubmit}