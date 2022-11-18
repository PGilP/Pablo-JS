'use strict'
let contadorCaracteres = 0;
let contadorPalabras = 0;

document.querySelector('#text').addEventListener('input',function(){

    contadorCaracteres = this.value.length;
    document.querySelector('#caracter').innerHTML = `${contadorCaracteres} caracteres`;

    let objResp = limpiaTextoCuentaPalabras(this.value);
    
    document.querySelector('#palabra').innerHTML = (this.value.length === 0) ? '0 palabras' : `${objResp.numPalabras} palabras`;
    
    document.querySelector('#slug').value = objResp.texto;
});


document.querySelector('.mayus').addEventListener('click',function(){
    document.querySelector('#publi').value = document.querySelector('#publi').value.toUpperCase();
    
});

document.querySelector('#publi').addEventListener('input',function(){
    
    document.querySelector('#caracterTextarea').innerHTML = `${this.value.length} caracteres`;
    
    
    
    document.querySelector('#palabraTextarea').innerHTML = (this.value.length === 0) ? '0 palabras' : `${limpiaTextoCuentaPalabras(this.value).numPalabras} palabras`;
    
});


document.querySelector('.minus').addEventListener('click',function(){
    document.querySelector('#publi').value = document.querySelector('#publi').value.toLowerCase();
});

function limpiaTextoCuentaPalabras(texto){
    texto = texto.trim();
    texto = texto.replaceAll('.','');
    texto = texto.replaceAll('*','');
    texto = texto.replaceAll(',','');

    texto = texto.replaceAll( /(\-+ +)/g, '-');
    texto = texto.replaceAll( /( +\-+)/g, '-');
    texto = texto.replaceAll( /(\-+)/g, '-');
    texto = texto.replaceAll( /( +)/g, '-');
    texto = texto.replaceAll( /^\-+/g, '');
    console.log(texto.split('-').length);
    return {
            'texto' : texto,
            'numPalabras' : texto.split('-').length
        };
}