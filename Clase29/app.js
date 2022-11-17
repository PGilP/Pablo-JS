/*
    - Métodos de STRING
    - Espresiones regulares
        + Match
        + Search
    - Pattern
        + test
        + exec



*/

let texto = "Hola mundoooo. Curso de JS   ";
// Sting -> "lista" de caracteres

console.log(texto[0]);
console.log(texto[1]);

// No estamos modificando el objeto original -> Transformando el objeto original en otro objeto
let texto_mayus = texto.toUpperCase();

let texto_sin_espacios = texto.trim();

let texto_parcial = texto.substring(0, 4);

console.log(texto_parcial);


let remplazar_texto = texto.replace('o', '*');
// Remplazo uno a uno
let remplazar_all_texto = texto.replaceAll('o', '*');

console.log(texto)
console.log(remplazar_texto)
console.log(remplazar_all_texto)

// Reg Exp -> Definir un patrón y buscarlo en un texto

// jose.apellido@otra.cosa.es

// BRE 1234

// COD1234-RT


/*
    midominio.com
        /blog
            /marketing
                /aaa
                /bbb
            /desarrollo
                /...
            /diseno
        /servicios
            /contacta
            /desarrollo



            
    nuevoDominio.com
        /blog
            /marketing
                /aaa
                /bbb
*/


console.clear();

let textoPrueba = "aHolaHolahola hola aaa mundo. Cursoe // de JS, jQuery, Aangular y React";
// let patron = /a/;
// let patron = /a/g;// Modificador g -> global; la búsqueda no para con el primer match
// let patron = /a/gi;// Modificador i -> insensitive; mayusculas y minusculas, le da igiual
// let patron = /^h/gi;// Si el patron es inicio de cadena 
// let patron = /^(h|a)/gi;// Si el patron es inicio de cadena y empieza por dos posibilidades
// let patron = /React$/gi;// Final de cadena
// let patron = /a{2}/gi;// la a se busca 2 veces seguidas
// let patron = /a{1,2}/gi;// la a se busca 1 ó 2 veces seguidas
// let patron = /a{0,2}/gi;// la a se busca 1 ó 2 veces seguidas
// let patron = /a{1,}/gi;// se busca 1 o más veces
// let patron = /[aeiou]/gi;// Todo lo que esté dentro de [] se usa como un comodín
// let patron = /[aeiou]{2}/gi;// Todo lo que esté dentro de [] se usa como un comodín
// let patron = /[aeiou]{1,}/gi;// Todo lo que esté dentro de [] se usa como un comodín
// let patron = /(Hola){1,}/gi;// Todo lo que esté dentro de [] se usa como un comodín
let patron = /\//gi;// Caracter de escape es \ -> después de este caracter viene el LITERAL


console.log(textoPrueba)
// console.log(textoPrueba.search(patron));
// console.log(textoPrueba.match(patron))
// console.log(textoPrueba.split(patron));

console.log(textoPrueba.replace(patron, "*"));

console.log('Test pattern', patron.test(textoPrueba));
console.clear();


// let url = "https://a12123a.com";
// let url = "https://aa.com";
// let url = "http://www.aa.com";
// let url = "https://www.aa.com";
let url = "http://a-.s-asda.bb.ccc.coma";
// let url = "http://aaaa4aaa.es";
// let url = "http://aa.com.es";

let pattern = /^(ht{2}p)s{0,1}:\/{2}(www\.){0,1}((?!-)[a-z0-9\-]{2,}\.){1,}[a-z0-9]{2,5}$/;
console.log(url);
console.log(url.replace(pattern, "*"));
console.log(pattern.test(url));









