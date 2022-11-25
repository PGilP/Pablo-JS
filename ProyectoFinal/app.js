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

/* 
    *) Local Storage
    1)Crear elemento task
    2)Recoger valor input

*/

let functionCheck = function(){
    console.log(this.parentNode.parentNode);
    let nameTask = this.parentNode.parentNode.querySelector('.name').innerText;
    if(tasks.toDo.find(element => element.name === nameTask)){
        let elementToDo = tasks.toDo.find(element => element.name === nameTask);
        console.log(elementToDo);
        tasks.doing.push(elementToDo);
        
        tasks.toDo = tasks.toDo.filter((item) => item.name !== nameTask);
        console.log(tasks);
        visualDelete(this.parentNode.parentNode);

        //Generamos el elemento que pasa al doing
        createElementModifyTask('doing',elementToDo.name);
        
    }else if(tasks.doing.find(element => element.name === nameTask)){

        let elementDoing = tasks.doing.find(element => element.name === nameTask);
        console.log(elementDoing);
        tasks.complete.push(elementDoing);
        
        tasks.doing = tasks.doing.filter((item) => item.name !== nameTask);
        console.log(tasks);
        visualDelete(this.parentNode.parentNode);

        //Generamos el elemento que pasa al doing
        createElementModifyTask('complete',elementDoing.name);

    }else if(tasks.complete.find(element => element.name === nameTask)){

        let elementComplete = tasks.complete.find(element => element.name === nameTask);
        console.log(elementComplete);
        tasks.doing.push(elementComplete);
        
        tasks.complete = tasks.complete.filter((item) => item.name !== nameTask);
        console.log(tasks);
        visualDelete(this.parentNode.parentNode);

        //Generamos el elemento que pasa al doing
        createElementModifyTask('doing',elementComplete.name);

    }
}

let functionDelete = function(){
    console.log(this.parentNode.parentNode);
    let nameTask = this.parentNode.parentNode.querySelector('.name').innerText;
    if(tasks.toDo.find(element => element.name === nameTask)){
        tasks.toDo = tasks.toDo.filter((item) => item.name !== nameTask);
    }else if(tasks.doing.find(element => element.name === nameTask)){
        tasks.doing = tasks.doing.filter((item) => item.name !== nameTask);
    }else if(tasks.complete.find(element => element.name === nameTask)){
        tasks.complete = tasks.complete.filter((item) => item.name !== nameTask);
    }
    console.log(tasks);
    visualDelete(this.parentNode.parentNode);
}


document.querySelector('#taskName').addEventListener('input',function(){
    document.querySelector('#taskName').classList.remove('empty');
    document.querySelector('#taskName').placeholder = 'Introduce una tarea';
    this.value = this.value.replace(/^ /,'');
});

document.querySelector('#addTask').addEventListener('click',function(){
    let nameTask = document.querySelector('#taskName').value.replace(/ +/g,' ');
    if(nameTask !== '' && 
      !tasks.toDo    .find(element => element.name === nameTask) &&
      !tasks.doing   .find(element => element.name === nameTask) &&
      !tasks.complete.find(element => element.name === nameTask)){

        document.querySelector('#taskName').value = '';
        createElementModifyTask('toDo',nameTask);
        let newTask = {
            name : nameTask,
            hash : nameTask.hashCode()
        };
        tasks.toDo.push(newTask);
        console.log(tasks.toDo);
    }else{
        document.querySelector('#taskName').value = '';
        document.querySelector('#taskName').classList.add('empty');
        document.querySelector('#taskName').placeholder = 'Este campo no puede estar vacío, ni existir previamente';
    }
});


//Crear TAREA

function createElementModifyTask(state,taskName){
    let elementTask = document.createElement('div');
    elementTask.classList.add('task', state);
    //Falta crear data-reference
        let elementName = document.createElement('div');
        elementName.classList.add('name');
        elementName.innerText = taskName;
        elementTask.append(elementName);
    
        let elementActions = document.createElement('div');
        elementActions.classList.add('actions');
        
            //Este elemento es el unico que va a cambiar al pasar a doing
            if(state === 'toDo'){
                let elementCheck = document.createElement('div');
                elementCheck.classList.add('check');
                elementCheck.addEventListener('click',functionCheck);
                let elementSpanCheck = document.createElement('span');
                elementSpanCheck.classList.add('material-symbols-outlined');
                elementSpanCheck.innerText = 'arrow_downward';
                let elementTooltipCheck = document.createElement('div');
                elementTooltipCheck.classList.add('tooltipText');
                elementTooltipCheck.innerHTML = 'Empieza la tarea';
                
                elementCheck.append(elementSpanCheck);
                elementCheck.append(elementTooltipCheck);

                elementActions.append(elementCheck);

            }else if( state === 'doing' || state === 'complete' ){

                let elementCheck = document.createElement('div');
                elementCheck.classList.add('check');
                elementCheck.addEventListener('click',functionCheck);
                let elementSpanCheck = document.createElement('span');
                elementSpanCheck.classList.add('material-symbols-outlined');
                elementSpanCheck.innerText = 'check_circle';
                let elementTooltipCheck = document.createElement('div');
                elementTooltipCheck.classList.add('tooltipText');
                elementTooltipCheck.innerHTML = 'Completa la tarea';
                
                elementCheck.append(elementSpanCheck);
                elementCheck.append(elementTooltipCheck);

                elementActions.append(elementCheck);

            }
            
            //Fin del elemento que cambia
    
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
    
}


//Eliminar visualmente el elemento

function visualDelete(element){
    element.remove();
}