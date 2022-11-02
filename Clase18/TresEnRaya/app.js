'use strict'
//Elegir nombres de jugadores y tipos de juego (Implementar después de tener el juego)
let player1       = 'Jugador 1';
let player2       = 'Jugador 2';
let tipoJuego     = 3;
let turno         = 0;
let estadoTablero = [
    [ '' , '' , '' ] ,
    [ '' , '' , '' ] ,
    [ '' , '' , '' ]
];

//Juego

//Puede haber distintos tipos de juego --> 3*3, 4*4, 7*7
let nodoTablero = document.querySelector('.tablero');

filtraJuego(player1,player2,tipoJuego);

function filtraJuego(player1,player2,tipoJuego){

    switch (tipoJuego) {
        case 3:
            nodoTablero.classList.add('tresRaya');
            empiezaTresEnRaya(player1,player2);
            break;
        
        case 4:
            nodoTablero.classList.add('cuatroRaya');
            empiezaCuatroEnRaya(player1,player2);
            break;
    
        case 7:
            nodoTablero.classList.add('sieteRaya');
            empiezaSieteEnRaya(player1,player2);
            break;

        default:
            nodoTablero.classList.add('tresRaya');
            empiezaTresEnRaya(player1,player2);
            break;
    }
    generarTablero(tipoJuego);
}

//Generacion tablero

function generarTablero(tipoJuego) {
    for (let c = 0; c < tipoJuego; c++) {
        console.log('hola');
        generarFilas(c);
    }
    
}

function generarFilas(c){

    for (let f = 0; f < tipoJuego; f++) {
        let divPosicion = document.createElement('div');
        divPosicion.id = String(c)+String(f);
        let img = document.createElement('img');
        divPosicion.appendChild(img);
        //Estoy desarrollando no poder sobreponer equis y circulos
        divPosicion.addEventListener('click', function(evento){
            console.log();
            if(this.firstChild.innerHTML === ''){

                pinta(this.firstChild);
                actualizaEstadoTablero(this.id);
            }
            // checkWin();
        });
        nodoTablero.appendChild(divPosicion);
    }
    
}


function actualizaEstadoTablero(posicion){
    let fila = posicion.charAt(0);
    let columna = posicion.charAt(1);

    estadoTablero[fila][columna] = (turno === 0) ? 'O' : 'X';
    if(turno === 0){
        console.log('primerTurno');
        estadoTablero[fila][columna] = 'O';
        console.log(estadoTablero);
        turno++;
    }else if(turno === 1){
        console.log('segundoTurno');
        estadoTablero[fila][columna] = 'X';
        console.log(estadoTablero);
        turno--;
    }
};


function pinta(img) {
    if(turno === 0){
        img.src =  './svg/circle.svg';
    }else if(turno === 1){
        img.src =  './svg/cross.svg';
    }
}


//Empieza jugador 1 (circulos), pincha en un div y se pinta un circulo
//Cambio de jugador y por tanto de color
//Jugador 2, pincha en un div y se pinta una raya
// .
// .
// .
// .
// .
// Si alguno consigue 3 en raya gana
// .
// .
// .
// .
// Se llena el tablero y nadie tiene tres en raya, entonces empate


function empiezaTresEnRaya(player1,player2){
    console.log('hola');
    let win = true;


    // do {
        
        
    //     win = checkWin(estadoTablero);

    // } while (!win);

    //Elegir jugador ganador

}

function checkWin(){
    
    return false;
}


function resetearJuego(){
    nodoTablero.innerHTML = '';

    //Preguntar tipo de juego y volver a iniciar;
}

function reiniciarJuego(){
    nodoTablero.innerHTML = '';
    filtraJuego(player1,player2,tipoJuego);

    //Reiniciar el mismo tipo de juego con los mismos jugadores;
}