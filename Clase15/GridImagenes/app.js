'use strict'

let arrayImagenesMostrar = [
    {
        src   : 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Water_drop_001.jpg',
        class : ['water']
    },
    {
        src   : 'https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2021-06/wildfires_smoke_adobe_web.jpg?h=d1cb525d&itok=MP9Z3Vvx',
        class : ['fire','ground']
    },
    {
        src   : 'https://i.natgeofe.com/n/c199c917-f357-45b2-9940-77784ed98d2d/why-is-america-running-out-of-water_16x9.jpg',
        class : ['water']
    }

];

let listaBotones  = document.querySelectorAll( '.containerBotones .botonFiltro' );


for (let i = 0; i < listaBotones.length; i++) {
    const boton = listaBotones[i];
    
    console.log(boton);
    
    boton.addEventListener('click', function(event){
        let idBoton = this.id;
        comprobarFiltro(idBoton);
    });
    
}

function comprobarFiltro(id){
    let listaImagenes = document.querySelectorAll( '.containerImages .imageWrapper' );
    if(id === 'all'){
        mostrarTodas(listaImagenes);
    }else{
        // mostrarTodas();
        filtrarImagenes(listaImagenes,id);
    }
};

function mostrarTodas(listaImagenes){
    for (let i = 0; i < listaImagenes.length; i++) {
        const nodoImg = listaImagenes[i];
        nodoImg.style.display = 'block';
    }
}

function filtrarImagenes(listaImagenes,id){
    
    for (let i = 0; i < listaImagenes.length; i++) {
        const nodoImg = listaImagenes[i];
        if(!nodoImg.classList.contains(id)){
            nodoImg.style.display = 'none';
        }else{
            nodoImg.style.display = 'block';
        }

    }
};