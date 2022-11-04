'use strict'
//Elegir nombres de jugadores y tipos de juego (Implementar después de tener el juego)
let eventoBoton = function(){
    let resultado = false;
    if(this.firstChild.src === ''){
        pinta(this.firstChild);
        actualizaEstadoTablero(this.id);
        resultado = checkWin();
        if(resultado === true){
            pintaVictoria();
        }
    }
}

let changeClassPlayer = document.querySelectorAll('.color');
let nodoPlayerMoving  = document.querySelector('.playerMoving');
let player1           = 'Jugador 1';
let player2           = 'Jugador 2';
let tipoJuego         = 7;
let turno             = 0; // 0 --> Primer jugador  ^^^^^ 1 --> Segundo jugador
let estadoTablero;

let nodoTablero = document.querySelector('.tablero');

filtraJuego(tipoJuego);
generarTablero(tipoJuego);

function filtraJuego(tipoJuego){
    nodoPlayerMoving.innerHTML = `<h1>Juega ${player1}</h1>`;

    switch (tipoJuego) {
        case 3:
            nodoTablero.classList.add('tresRaya');
            break;
        
        case 4:
            nodoTablero.classList.add('cuatroRaya');
            break;
    
        case 7:
            nodoTablero.classList.add('sieteRaya');
            break;

        default:
            nodoTablero.classList.add('tresRaya');
            break;
    }
    
}

//Generacion tablero

function generarTablero(tipoJuego) {
    estadoTablero = new Array();
    generarColumnas(tipoJuego);
}
function generarColumnas(){
    for (let c = 0; c < tipoJuego; c++) {
        generarFilas(c);
    }
}

function generarFilas(c){
    estadoTablero[c] = new Array();
    for (let f = 0; f < tipoJuego; f++) {
        estadoTablero[c][f] = '';
        let divPosicion = document.createElement('div');
        divPosicion.classList.add('posicion');
        divPosicion.id = String(c)+String(f);
        let img = document.createElement('img');
        divPosicion.appendChild(img);
        divPosicion.addEventListener('click', eventoBoton);
        nodoTablero.appendChild(divPosicion);
    }
}

function pintaVictoria(){
    let listPosicion = document.querySelectorAll('.posicion');
    listPosicion.forEach(element => {
        element.removeEventListener('click',eventoBoton);
    })
    nodoPlayerMoving.innerHTML = '<h1>VICTORIAAAA</h1>';
}

function actualizaEstadoTablero(posicion){
    let fila = posicion.charAt(0);
    let columna = posicion.charAt(1);
    if(turno === 0){
        estadoTablero[fila][columna] = 'O';
        turno++;
        nodoPlayerMoving.innerHTML = `<h1>Juega ${player2}</h1>`;
        changeClassPlayer.forEach(element => {
            element.classList.remove('player1');
            element.classList.add('player2');
        });
    }else if(turno === 1){
        estadoTablero[fila][columna] = 'X';
        turno--;
        nodoPlayerMoving.innerHTML = `<h1>Juega ${player1}</h1>`;
        changeClassPlayer.forEach(element => {
            element.classList.remove('player2');
            element.classList.add('player1');
        });
    }
};

function pinta(img) {
    if(turno === 0){
        img.src = './svg/circle.svg';
    }else if(turno === 1){
        img.src = './svg/cross.svg';
    }
}

function checkWin(){
    
    for (let i = 0; i < estadoTablero.length; i++) {
        for (let j = 0; j < estadoTablero[i].length; j++) {
            if(estadoTablero[i][j]   !== ''){
                return  comprobarDerecha(i,j)         || comprobarAbajo(i,j) || 
                        comprobarDiagonalDerecha(i,j) || comprobarDiagonalIzquierda(i,j);
            }
        }
    }
}
    
function comprobarDerecha(fila,columna){
    console.log(estadoTablero);
    let ancho = (estadoTablero[fila].length-1);
    if( ancho - columna >= 2 ){
        return estadoTablero[fila][columna]   === estadoTablero[fila][columna+1] && 
               estadoTablero[fila][columna+1] === estadoTablero[fila][columna+2];
    }
    return false;
}

function comprobarDiagonalDerecha(fila,columna){

    let alto = (estadoTablero.length-1);
    let ancho = (estadoTablero[fila].length-1);
    
    if(alto - fila >= 2 &&
       ancho - columna >= 2 ){

        return estadoTablero[fila][columna]     === estadoTablero[fila+1][columna+1] && 
               estadoTablero[fila+1][columna+1] === estadoTablero[fila+2][columna+2];
    }
    return false;
}


function comprobarAbajo(fila,columna){
    let alto = (estadoTablero.length-1);
    if( alto - fila >= 2 ){
        return estadoTablero[fila][columna]   === estadoTablero[fila+1][columna] && 
                        estadoTablero[fila+1][columna] === estadoTablero[fila+2][columna];
    }
    return false;
}

function comprobarDiagonalIzquierda(fila,columna){
    console.log('fila-->',fila,'columna-->',columna);
    let alto = (estadoTablero.length-1);
    if( (columna - 2 >= 0) &&
        (alto - fila >= 2) ){
        
        console.log('entro a comprobar');
        return  (estadoTablero[fila][columna]     === estadoTablero[fila+1][columna-1] && 
                estadoTablero[fila+1][columna-1] === estadoTablero[fila+2][columna-2]);
    
    }
    return false;

}

function resetearJuego(){
    nodoTablero.innerHTML = '';
}

function reiniciarJuego(){
    nodoTablero.innerHTML = '';
    filtraJuego(tipoJuego);
    generarTablero(tipoJuego);
}