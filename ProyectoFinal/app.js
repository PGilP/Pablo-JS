'use strict'

let tasks = {
    toDo:[
        {
            name: '',
            state: '',
            reference : 0,
        }
    ],
    doing:[],
    complete:[]
}

/* 
    *) Local Storage
    1)Crear elemento task
    2)Recoger valor input

*/

let listTasks = document.querySelectorAll('.task');

listTasks.forEach(element => {
    console.log(element.dataset.reference);
});





//Crando elemento TAREA TO-DO

let elementTaskToDo = document.createElement('div');
elementTaskToDo.classList.add('task', 'toDo');
//Falta crear data-reference
    let elementName = document.createElement('div');
    elementName.classList.add('name');
    elementName.innerText = 'NombreTarea';
    elementTaskToDo.append(elementName);

    let elementActions = document.createElement('div');
    elementActions.classList.add('actions');
        let elementCheck = document.createElement('div');
        elementCheck.classList.add('check');
        elementActions.append(elementCheck);
        let elementDelete = document.createElement('div');
        elementDelete.classList.add('delete');
        elementActions.append(elementDelete);
    elementTaskToDo.append(elementActions);

document.querySelector('.toDoSection .listTasks').append(elementTaskToDo);

/* 

<div class="task toDo" data-reference="1">
    <div class="name">HTML</div>
    <div class="actions">
        <div class="check">
            <span class="material-symbols-outlined">arrow_downward</span>
            <div class="tooltipText">Empieza la tarea</div>
        </div>
        <div class="delete">
            <span class="material-symbols-outlined">delete</span>
            <div class="tooltipText">Elimina la tarea</div>
        </div>
    </div>
</div>


*/