'use strict'

let nodoPrecioIntroducido = document.querySelector( '#precioIntroducido' );
let nodoCupon = document.querySelector( '#cupon' );
let nodoResultado = document.querySelector( '#resultado' );


function calcularPrecio(){

    let valorCupon = nodoCupon.value;

    //50
    let precioBase = recogerValor();

    //37.5
    let precioDescuento = validarCupon(precioBase,valorCupon);

    //37.5*0.21
    let impuestos = calcularImpuestos(precioDescuento);


    let envio = calcularEnvio(precioDescuento+impuestos);

    let total = Number((precioDescuento + impuestos + envio).toFixed(2));

    pintarDatos(precioBase,impuestos,envio,total);
}

function recogerValor(){
    let valorIntroducido = Number(nodoPrecioIntroducido.value);
    return valorIntroducido;
}

function calcularImpuestos(precio){
    return Number((precio * 0.21).toFixed(2)); //AAAAAAAAAAA
}

function calcularEnvio(precio){
    console.log( precio );
    if(precio < 50){
        return 10;
    }else{
        return 0;
    }

    //Clausula de guarda
    // Limpieza de código
    if(! autenticado){
        return 'Invalido';
    }
    //Codigo normal
    return 0;

}

function validarCupon(precio,cuponText){
    if (cuponText === 'descuento25'){
        nodoResultado.querySelector( '#descuento span').innerHTML = `${Number((precio*0.75).toFixed(2))}€`;
        return Number((precio*0.75).toFixed(2));
    }else{
        nodoResultado.querySelector( '#descuento span').innerHTML = `No aplica`;
        return precio;
    }
}

function pintarDatos(precioBase,impuestos,envio,total){
    nodoResultado.querySelector( '#precioBase span').innerHTML = `${precioBase}€`;
    nodoResultado.querySelector( '#impuestos span').innerHTML = `${impuestos}€`;
    nodoResultado.querySelector( '#envio span').innerHTML = `${envio}€`;
    nodoResultado.querySelector( '#total span').innerHTML = `${total}€`;
}