let nodoResultado = document.querySelector( '#resultado' );



function pintaDatos(){
    let multiplo = Number(document.querySelector( '#multiplo' ).value);

    if(esPar(multiplo)){
        nodoResultado.querySelector( '#par' ).innerHTML = 'El número es par';
    }else{
        nodoResultado.querySelector( '#par' ).innerHTML = '';
    }

    if(esMultiplo3(multiplo)){
        nodoResultado.querySelector( '#multiplo_3' ).innerHTML = 'El número es múltiplo de 3';
    }else{
        nodoResultado.querySelector( '#multiplo_3' ).innerHTML = '';
    }

    if(esMultiplo7(multiplo)){
        nodoResultado.querySelector( '#multiplo_7' ).innerHTML = 'El número es múltiplo de 7';
    }else{
        nodoResultado.querySelector( '#multiplo_7' ).innerHTML = '';
    }
    
}


function esPar( numero ){
    return Boolean( numero % 2 === 0);
}

function esMultiplo3( numero ){
    return Boolean( numero % 3 === 0);
}

function esMultiplo7( numero ){
    return Boolean( numero % 7 === 0);
}