'use strict'
let contadorCaracteres = 0;
let contadorPalabras = 0;

document.querySelector('#text').addEventListener('input',function(){
        
    this.value = this.value.trim();
    this.value = this.value.replace('.','');
    this.value = this.value.replace('*','');
    this.value = this.value.replace(',','');
    console.log(this.value);
    
    let patron = / +/g;
    console.log(this.value.replace(patron, '*'));

    this.value.split(patron).length;


    contadorCaracteres = this.value.length;
    document.querySelector('#caracter').innerHTML = `${contadorCaracteres} caracteres`;

    
    contadorPalabras = calculaPalabras(this.value.trim());
    document.querySelector('#palabra').innerHTML = (this.value.length === 0) ? '0 palabras' : `${contadorPalabras} palabras`;
    
    
    
    
    document.querySelector('#slug').value = this.value.trim();
})

function calculaPalabras(texto){
    if(texto.length === 0){
        return 0
    }

}