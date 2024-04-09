// this module contains the parent toDoArray 
// and will add an array to it when form is submited
// each sub array represents a project

let toDoArray = [
    [
        {
            title: "Gym",
            priority: "High",
            dueDate: "2-12-24",
            description: "Its Leg Day"
        },
        {
            title: "Work on Project",
            priority: "Medium",
            dueDate: "2-10-24",
            description: "Fix bugs"
        }
    ]
];

function addProject(){
    toDoArray.push([]);
    console.log(toDoArray);
}

export {addProject};

