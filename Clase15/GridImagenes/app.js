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
    },
    {
        src   : 'https://img.staticmb.com/mbcontent//images/uploads/2021/9/the-process-of-buying-agricultural-land-in-india.jpg',
        class : ['ground']
    },
    {
        src   : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Firetora.jpg/1200px-Firetora.jpg',
        class : ['fire']
    },
    {
        src   : 'https://media.istockphoto.com/photos/purification-water-fountain-in-kyoto-japan-with-liquid-running-from-picture-id1235495974?k=20&m=1235495974&s=612x612&w=0&h=TmBQY9U666Jwb-NwahoZ5uwXEXemz-5rsRuiEAGQv6w=',
        class : ['water']
    }
];
let containerImages = document.querySelector( '.container .containerImages' );
let listaBotones    = document.querySelectorAll( '.containerBotones .botonFiltro' );

cargarImagenes(arrayImagenesMostrar);
anadirEventosBotones(listaBotones);


let listaImagenes = document.querySelectorAll('.containerImages .imageWrapper');

anadirEventosImagenes(listaImagenes);

function anadirEventosBotones(listaBotones){

    for (let i = 0; i < listaBotones.length; i++) {
        const boton = listaBotones[i];

        boton.addEventListener('click', function(event){
            let idBoton = this.id;
            comprobarFiltro(idBoton);
        });
    }
}

function comprobarFiltro(id){
    // let listaImagenes = document.querySelectorAll( '.containerImages .imageWrapper' );
    (id === 'all') ? mostrarTodas(listaImagenes) : filtrarImagenes(listaImagenes,id);
};

function mostrarTodas(listaImagenes){
    for (let i = 0; i < listaImagenes.length; i++) {
        const nodoImg = listaImagenes[i];
        nodoImg.style.display = 'flex';
    }
}

function filtrarImagenes(listaImagenes,id){
    
    for (let i = 0; i < listaImagenes.length; i++) {
        const nodoImg = listaImagenes[i];
        nodoImg.style.display = (!nodoImg.classList.contains(id)) ? 'none' : 'flex';
    }
}

function cargarImagenes(arrImg){
    let htmlImg = '';
    for (let i = 0; i < arrImg.length; i++) {
        const objImg = arrImg[i];
        let classList = recogerClasesObjeto(objImg.class);
        htmlImg += `<div class="imageWrapper ${classList}">
                        <img src="${objImg.src}">
                    </div>`;
    }
    pintaImgs(htmlImg);
}
            
function recogerClasesObjeto(objImg){
    let classList = '';
    for (let i = 0; i < objImg.length; i++) {
        const objClases = objImg[i];
        classList += objClases + ' ';
    }
    return classList;
}

function pintaImgs(htmlImg){
    containerImages.innerHTML += htmlImg;
}

function anadirEventosImagenes(listImg){
    let nodoLightBox = document.querySelector('.container .lightBox');
    let nodoImgLightBox = nodoLightBox.querySelector('img');
    
    for (let i = 0; i < listImg.length; i++) {
        const nodoImageWrapper = listImg[i];
        
        let nodoImg = nodoImageWrapper.querySelector('img');
        nodoImageWrapper.addEventListener('click' , function(){
            nodoLightBox.style.display = 'flex';
            // document.body.style.overflow = 'hidden';
            nodoImgLightBox.src = nodoImg.src;
        }); 
    }

    nodoImgLightBox.addEventListener('click' , function(ev){
        console.log('Ejecuto evento hijo');
        ev.stopPropagation();
    });
    
    nodoLightBox.addEventListener('click',function(){
        console.log('Ejecuto evento padre');
        nodoLightBox.style.display = 'none';

    });

    nodoLightBox.addEventListener('wheel',function(ev){
        ev.preventDefault();
    });
    
}