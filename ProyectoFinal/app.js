'use strict'

//Metodo para obtener un hash para cada tarea
String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

let tasks = {
    toDo:[],
    doing:[],
    complete:[]
}

let functionCheck = function(){
    let task = this.closest('.task');
    let nameTask = task.querySelector('.name').innerText;

    if(tasks.toDo.find(element => element.name === nameTask)){
        filterTasks('toDo','doing');        
    }else if(tasks.doing.find(element => element.name === nameTask)){
        filterTasks('doing','complete');
    }else if(tasks.complete.find(element => element.name === nameTask)){
        filterTasks('complete','doing');
    }

    function filterTasks(arrFind,arrAdd){

        let element = tasks[arrFind].find(element => element.name === nameTask);
        tasks[arrAdd].push(element);
        
        tasks[arrFind] = tasks[arrFind].filter((item) => item.name !== nameTask);
        visualDelete(task);

        visualTratementTask(arrAdd,element.name);

    }

    localStorage.setItem('tasks',JSON.stringify(tasks));
}
let functionDelete = function(){
    let task = this.closest('.task');
    let nameTask = task.querySelector('.name').innerText;
    if(tasks.toDo.find(element => element.name === nameTask)){
        tasks.toDo = tasks.toDo.filter((item) => item.name !== nameTask);
    }else if(tasks.doing.find(element => element.name === nameTask)){
        tasks.doing = tasks.doing.filter((item) => item.name !== nameTask);
    }else if(tasks.complete.find(element => element.name === nameTask)){
        tasks.complete = tasks.complete.filter((item) => item.name !== nameTask);
    }
    console.log(tasks);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    visualDelete(task);
}

let functionCreateTask = function(){
    let nameTask = document.querySelector('#taskName').value.replace(/ +/g,' ');
    if(nameTask !== '' && 
      !tasks.toDo    .find(element => element.name === nameTask) &&
      !tasks.doing   .find(element => element.name === nameTask) &&
      !tasks.complete.find(element => element.name === nameTask)){

        document.querySelector('#taskName').value = '';
        visualTratementTask('toDo',nameTask);
        let newTask = {
            name : nameTask,
            hash : nameTask.hashCode()
        };
        tasks.toDo.push(newTask);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        document.querySelector('#taskName').value = '';
        document.querySelector('#taskName').classList.add('empty');
        document.querySelector('#taskName').placeholder = 'Este campo no puede estar vacío, ni existir previamente';
    }
}

document.querySelector('#taskName').addEventListener('input',function(){
    document.querySelector('#taskName').classList.remove('empty');
    document.querySelector('#taskName').placeholder = 'Introduce una tarea';
    this.value = this.value.replace(/^ /,'');
});

document.querySelector('#addTask').addEventListener('click',functionCreateTask);

document.querySelector('#taskName').addEventListener('keypress',function(ev){
    if(ev.key === 'Enter'){
        functionCreateTask();
    }
});

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.toDo.forEach(element => {
        visualTratementTask('toDo',element.name);
    });

    tasks.doing.forEach(element => {
        visualTratementTask('doing',element.name);
    });

    tasks.complete.forEach(element => {
        visualTratementTask('complete',element.name);
    });
}


function visualTratementTask(state,taskName){
    let elementTask = document.createElement('div');
    elementTask.classList.add('task', state);
    let elementName = document.createElement('div');
    elementName.classList.add('name');
    elementName.innerText = taskName;
    elementTask.append(elementName);

    let elementActions = document.createElement('div');
    elementActions.classList.add('actions');
    
    //Este elemento es el unico que va a cambiar al pasar a doing
    if(state === 'toDo'){
        createCheck('Empieza la tarea','arrow_downward');
    }else if( state === 'doing' || state === 'complete' ){
        createCheck('Completa la tarea','check_circle');
    }

    let elementDelete = document.createElement('div');
    elementDelete.classList.add('delete');
    elementDelete.addEventListener('click',functionDelete);
        
    let elementSpanDelete = document.createElement('span');
    elementSpanDelete.classList.add('material-symbols-outlined');
    elementSpanDelete.innerText = 'delete';
    let elementTooltipDelete = document.createElement('div');
    elementTooltipDelete.classList.add('tooltipText');
    elementTooltipDelete.innerHTML = 'Elimina la tarea';
    
    elementDelete.append(elementSpanDelete);
    elementDelete.append(elementTooltipDelete);
    elementActions.append(elementDelete);
    
    elementTask.append(elementActions);
    
    document.querySelector(`.${state}Section .listTasks`).append(elementTask);
    
    function createCheck(textTooltip,iconSpan){

        let elementCheck = document.createElement('div');
        elementCheck.classList.add('check');
        elementCheck.addEventListener('click',functionCheck);
        let elementSpanCheck = document.createElement('span');
        elementSpanCheck.classList.add('material-symbols-outlined');
        elementSpanCheck.innerText = iconSpan;
        let elementTooltipCheck = document.createElement('div');
        elementTooltipCheck.classList.add('tooltipText');
        elementTooltipCheck.innerHTML = textTooltip;
        
        elementCheck.append(elementSpanCheck);
        elementCheck.append(elementTooltipCheck);

        elementActions.append(elementCheck);

    }
}

function visualDelete(element){
    element.remove();
}