'use strict'

let tasks = {
    toDo:[],
    doing:[],
    complete:[]
}

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

let functionCheck = function(){
    let task      = this.closest('.task');
    let nameTask  = task.querySelector('.name').innerText;
    let stateTask = task.getAttribute('state');

    if(stateTask === 'toDo'){
        filterTasks(stateTask,'doing');
    }else if(stateTask === 'doing'){
        filterTasks(stateTask,'complete');
    }else if(stateTask === 'complete'){
        filterTasks(stateTask,'doing');
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
    let task      = this.closest('.task');
    let nameTask  = task.querySelector('.name').innerText;
    let stateTask = task.getAttribute('state');
    if(tasks[stateTask].find(element => element.name === nameTask)){
        tasks[stateTask] = tasks[stateTask].filter((item) => item.name !== nameTask);
    }
    visualDelete(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

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

let functionCreateTask = function(){
    let nameNewTask  = document.querySelector('#taskName').value.replace(/ +/g,' ');
    let stateNewTask = document.querySelector('#stateNewTask').value;
    if(nameNewTask !== '' && 
      !tasks.toDo    .find(element => element.name === nameNewTask) &&
      !tasks.doing   .find(element => element.name === nameNewTask) &&
      !tasks.complete.find(element => element.name === nameNewTask)){

        document.querySelector('#taskName').value = '';
        let newTask = {
            name : nameNewTask,
            hash : nameNewTask.hashCode()
        };
        tasks[stateNewTask].push(newTask);
        visualTratementTask(stateNewTask,nameNewTask);
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
    this.value = this.value.replace(/^ +/g,'');
    this.value = this.value.replace(/ {2,}/g,' ');
});

document.querySelector('#addTask').addEventListener('click',functionCreateTask);

document.querySelector('#taskName').addEventListener('keypress',function(ev){
    if(ev.keyCode === 13){
        functionCreateTask();
    }
});

function visualTratementTask(state,taskName){
    let elementTask = document.createElement('div');
    elementTask.classList.add('task', state);
    elementTask.setAttribute('state',state)
    let elementName = document.createElement('div');
    elementName.classList.add('name');
    elementName.innerText = taskName;
    elementTask.append(elementName);

    let elementActions = document.createElement('div');
    elementActions.classList.add('actions');
    
    let elementCheck;
    if(state === 'toDo'){
        elementCheck = createCheck('Empieza la tarea','arrow_downward');
        elementActions.append(elementCheck);
    }else if( state === 'doing' || state === 'complete' ){
        elementCheck = createCheck('Completa la tarea','check_circle');
        elementActions.append(elementCheck);
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

        return elementCheck;
    }
}

function visualDelete(element){
    element.remove();
}