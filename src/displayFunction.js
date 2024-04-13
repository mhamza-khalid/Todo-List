
function display(array, index){
    array[index].forEach((object)=>{

        let card = document.createElement('div');
        card.classList.add('todoCard');

        let firstRow = document.createElement('div');
        firstRow.classList.add('firstRow');
        let secondRow = document.createElement('div');
        secondRow.classList.add('secondRow');
        let thirdRow = document.createElement('div');
        thirdRow.classList.add('thirdRow');

        let titleDiv = document.createElement('div');
        titleDiv.textContent = 'Title:' + ' ' + object.title;

        let priority = document.createElement('div');
        priority.textContent = 'Priority:' + ' ' + object.priority;

        let description = document.createElement('div');
        description.textContent = 'Description:' + ' ' + object.description;

        let dueDate = document.createElement('div');
        dueDate.textContent = 'Due Date:' + ' ' + object.dueDate;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Completed';
        deleteButton.classList.add('delete');

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        
        firstRow.appendChild(titleDiv);
        firstRow.appendChild(priority);

        secondRow.appendChild(description);
        secondRow.appendChild(dueDate);

        thirdRow.appendChild(deleteButton);
        thirdRow.appendChild(editButton);

        card.appendChild(firstRow);
        card.appendChild(secondRow);
        card.appendChild(thirdRow);

        todos.appendChild(card);

        ++objectNumber
    })
}

export {display}