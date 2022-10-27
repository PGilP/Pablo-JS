'use strict'
//Elegir nombres de jugadores y tipos de juego (Implementar después de tener el juego)
let player1   = 'Jugador 1';
let player2   = 'Jugador 2';
let tipoJuego = 3;

//Juego

//Puede haber distintos tipos de juego --> 3*3, 4*4, 7*7
let nodoTablero = document.querySelector('.tablero');

filtraJuego(player1,player2,tipoJuego);

function filtraJuego(player1,player2,tipoJuego){

    generarTablero(tipoJuego);
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
}

//Generacion tablero
function generarTablero(tipoJuego){
    console.log(tipoJuego);

    for (let i = 0; i < Math.pow(tipoJuego,2); i++) {
        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        newDiv.appendChild(newImg);
        newDiv.addEventListener('click', function(){
            pintaCirculo(this.firstChild);
        });
        nodoTablero.appendChild(newDiv);
        
    }

}

function pintaCirculo(img) {
    let nodoImg = new HTMLImageElement(img);
    nodoImg.setAtribbute('src', './svg/circle.svg');
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
    let estadoTablero = [
        [ '' , '' , '' ] ,
        [ '' , '' , '' ] ,
        [ '' , '' , '' ]
    ];

    // do {
        
        
    //     win = checkWin(estadoTablero);

    // } while (!win);

    //Elegir jugador ganador

}

function checkWin(tableroJuego){
    
    return false;
}