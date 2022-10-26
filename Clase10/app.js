'use strict'

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let nodoNumeroDNI = document.querySelector( '#numeroDNI' );
let nodoResultado = document.querySelector( '#resultado' );

function comprobarDNI(){
    let dniCompleto = nodoNumeroDNI.value;
    let dniLetra = dniCompleto.slice(-1);
    let dniNumero = dniCompleto.slice(0,8);
    console.log(dniLetra,'  ',dniNumero);

    if(errorFormato( dniCompleto , dniNumero ) === true){
    
        nodoResultado.innerHTML = '<p style="color:red">No es el formato correcto de un DNI</p>';
    
    }else {
    
        nodoResultado.innerHTML = '';
        calcularLetra( dniLetra , dniNumero );
    
    }

    // let numeroDni =  ;
}

function errorFormato(dniCompleto,dniNumero){

    if(dniCompleto.length !== 9){
        return true;
        
    }

    if(dniNumero.length !== 8 || Number(dniNumero) < 0){
        return true;
    }

}

function calcularLetra( letra , numero ){
    console.log(letras.indexOf(letra));
    console.log(numero%23);

    if(letras.indexOf(letra) === numero % 23 ){
        nodoResultado.innerHTML = '<p style="color:green">Ha introducido correctamente la letra</p>';
    }else{
        nodoResultado.innerHTML = '<p style="color:red">No ha introducido correctamente la letra</p>';
    }
}