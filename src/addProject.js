import './style.css';

import { populateProjectsStorage } from './localStorage';
import { loadProjectsFromStorage } from './localStorage';

import { addProjectArray } from "./localStorage";
// let parent = document.querySelector('#projects');
// let projectForm = document.querySelector('#addProjectForm');
// let number = 1;  // number attribute

let parent = document.querySelector('#projectButtons');


function handleSubmit(event){
    event.preventDefault();

    // let newProject = document.createElement('button');
    // newProject.setAttribute('number', number);
    // newProject.classList.add('projectButton')

    // ++number;

    let projectName = document.querySelector('#inputProject').value;

    populateProjectsStorage(projectName);

    parent.textContent = '';
    addProjectArray();
    loadProjectsFromStorage();

    // newProject.textContent = projectName;

    // parent.insertBefore(newProject, projectForm);

    // projectForm.reset();
}



export {handleSubmit}