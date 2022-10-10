let nodoEdad = document.querySelector( '#edad' );

let edadIntroducida = Number(window.prompt( '¿Qué edad tienes?' ));

let mensajeMostrar = calcularEdad(edadIntroducida);

nodoEdad.innerHTML = mensajeMostrar;

function calcularEdad(edadIntroducida){
    let edadRestante;
    let mensajeEdad;
    
    const LIMITE_NACIMIENTO  = 0;
    const LIMITE_BEBE        = 2;
    const LIMITE_NINO        = 12;
    const LIMITE_ADOLESCENTE = 18;
    const LIMITE_ADULTO      = 65;
    
    if( edadIntroducida < LIMITE_NACIMIENTO ){
        mensajeEdad = '<h2>No has nacido</h2>';
    }else if( edadIntroducida < LIMITE_BEBE ){
        edadRestante = LIMITE_BEBE - edadIntroducida;
        mensajeEdad = '<h2>Eres un bebé ';
        mensajeEdad += calculaTexto(edadRestante);
        mensajeEdad += 'para ser un niño</h2>'
    }else if( edadIntroducida < LIMITE_NINO ){
        edadRestante = LIMITE_NINO - edadIntroducida;
        mensajeEdad = '<h2>Eres un niño ' + calculaTexto(edadRestante) + ' para ser un adolescente</h2>';
    }else if( edadIntroducida < LIMITE_ADOLESCENTE ){ 
        edadRestante = LIMITE_ADOLESCENTE - edadIntroducida;
        mensajeEdad = '<h2>Eres un adolescente ';
        mensajeEdad += calculaTexto(edadRestante);
        mensajeEdad += 'para ser un adulto</h2>'
    }else if( edadIntroducida < LIMITE_ADULTO ){
        edadRestante = LIMITE_ADULTO - edadIntroducida;
        mensajeEdad = '<h2>Eres un adulto ';
        mensajeEdad += calculaTexto(edadRestante);
        mensajeEdad += ' para ser un abuelo</h2>';
    }else if( edadIntroducida >= LIMITE_ADULTO ){
        mensajeEdad = '<h2>Eres un abuelo y siempre lo serás</h2>';
    }else{
        mensajeEdad = '<h2>No has introducido correctamente la edad</h2>';
    }

    return mensajeEdad;
}

function calculaTexto(edadRestante){
    let textoDevuelto;
    if(edadRestante === 1){
        textoDevuelto = 'y te falta ' + edadRestante + ' año'; 
    }else{
        textoDevuelto = 'y te faltan ' + edadRestante + ' años';
    }
    return textoDevuelto;
}