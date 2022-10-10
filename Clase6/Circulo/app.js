
let nodoResultado = document.querySelector( '#resultado' );



function pintaDatos(){
    let radio = document.querySelector( '#radio' ).value;
    nodoResultado.querySelector( '#area' ).innerHTML = '<p>El área del círculo es ' + calculaArea(radio) + '</p>';
    nodoResultado.querySelector( '#diametro' ).innerHTML = '<p>El diámetro del círculo es ' + calculaDiametro(radio) + '</p>';
    nodoResultado.querySelector( '#perimetro' ).innerHTML = '<p>El perímetro del círculo es ' + calculaPerimetro(radio) + '</p>';
}


function calculaDiametro( radio ){
    return (2 * radio)
}

function calculaArea( radio ){

    return (2 * Math.PI * ( radio * radio ) );
}

function calculaPerimetro( radio ){
    return ( 2 * Math.PI * radio );
}