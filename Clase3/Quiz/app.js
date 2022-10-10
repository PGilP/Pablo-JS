'use strict'

let nodoRespuesta = document.querySelector( '#respuesta' );
let nodoBoton     = document.querySelector( 'button' );


function quiz(){

    let nombreUsuario = window.prompt( '¿Cómo te llamas?' );
    
    let mensajeDevuelto;

    let fechaInicio = Date.now();
    let respuesta1  = window.prompt( '¿Cuantas patas tiene un perro?');

    if( respuesta1 === '4' ){
        window.alert('Felicidades ' + nombreUsuario + '!');
        let respuesta2 = window.prompt( '¿Cuantas patas tiene una araña?');
        
        if( respuesta2 === '8' ) {

            window.alert('Felicidades ' + nombreUsuario + '!');
            let respuesta3 = window.prompt( '¿Cuantas patas tiene un pájaro?');
            
            if( respuesta3 === '2' ) {

                let fechaFin = Date.now();
                let tiempoTranscurrido = (fechaFin - fechaInicio)/1000;

                mensajeDevuelto = '¡Enhorabuena, has estudiado lo suficiente '+ nombreUsuario +'!<br>Has tardado '+ tiempoTranscurrido + ' s';
                nodoRespuesta.innerHTML = '<h2>' + mensajeDevuelto + '</h2>';

            }else{

                mensajeDevuelto = 'Sólo has acertado dos '+ nombreUsuario +'!';
                nodoRespuesta.innerHTML = '<h2>' + mensajeDevuelto + '</h2>';
                nodoBoton.innerHTML = 'Reiniciar';
                
            }
        }else{

            mensajeDevuelto = '¡Fallaste vuelve a intentarlo! ' + nombreUsuario;
            nodoRespuesta.innerHTML = '<h2>' + mensajeDevuelto + '</h2>';
            nodoBoton.innerHTML = 'Reiniciar';

        }

    }else{

        mensajeDevuelto = '¡Tienes que estudiar más! ' + nombreUsuario;
        nodoRespuesta.innerHTML = '<h2>' + mensajeDevuelto + '</h2>';
        nodoBoton.innerHTML = 'Reiniciar';

    }
}