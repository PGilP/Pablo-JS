'use strict'

$('.boton.open').on({
    'click' : function(){
        $('.menu').slideDown();
        $('.boton.open').hide();
    }
});

$('.boton.cerrar').on({
    'click' : function(){
        $('.menu').hide();
        $('.boton.open').show();
    }
});