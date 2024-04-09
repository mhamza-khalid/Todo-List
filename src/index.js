import { handleSubmit } from "./addProject"; //manipulates the DOM
import { addProject } from "./toDoArray";

//adds a new project when user hits add project
let projectForm = document.querySelector('#addProjectForm');
projectForm.addEventListener('submit', handleSubmit);

projectForm.addEventListener('submit', addProject);
