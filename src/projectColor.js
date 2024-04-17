

function changeColor(event){

    let buttons = document.querySelectorAll('.projectButton')

    buttons.forEach((button)=>{
        button.style.backgroundColor = '#d3d3d3';
    })
    event.target.style.backgroundColor = '#a8d9da'
}

export {changeColor}