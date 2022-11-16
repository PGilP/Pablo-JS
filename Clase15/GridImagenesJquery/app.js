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

cargarImagenes(arrayImagenesMostrar);

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

$( '.containerBotones .botonFiltro' ).on({
    'click': function(){
        console.log(this);
        let idBoton = this.id;
        comprobarFiltro(idBoton);
    }
});

$('.container .lightBox').on({
    'click':function(){
        $('.container .lightBox').css({
            'display' : 'none' 
        })
    }
});

$('.containerImages .imageWrapper').on({
    'click': function(){
        console.log(this.querySelector('img').src);
        $('.container .lightBox').css({
            'display' : 'flex' 
        })
        $('.container .lightBox img').attr('src', this.querySelector('img').src);
    }
});

$('.container .lightBox img').on({
    'click' : function(ev){
        ev.stopPropagation();
    }
});

$('.container .lightBox').on({
    'click':function(){
        console.log(this);
        $('.container .lightBox').css({
            'display' : 'none' 
        })
    }
    , 'wheel' : function(ev){
        ev.preventDefault();
    }
});

function comprobarFiltro(id){
    (id === 'all') ? mostrarTodas($('.containerImages .imageWrapper')) : filtrarImagenes($('.containerImages .imageWrapper'),id);
};

function mostrarTodas(listaImagenes){
    listaImagenes.css({
        'display' : 'flex'
    });
}

function filtrarImagenes(listaImagenes,id){

    for (let i = 0; i < listaImagenes.length; i++) {
        const nodoImg = listaImagenes[i];
        nodoImg.style.display = (!nodoImg.classList.contains(id)) ? 'none' : 'flex';
    }
}