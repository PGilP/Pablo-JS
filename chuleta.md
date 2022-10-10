# CHULETA JS

JS es un elemento bloqueante. Bloquea la construcción de la web en ese punto hasta que ejecute todo el script

## Formas de incluir JS

### En el header
```html
<script async defer src="app.js"></script>
```
El async defer hace referencia al momento en el que se termina de construir la web

### Abajo
```js
```

### Cualquier lugar
```js
```

## Comandos VS Code

## Variables
En las últimas versiones de JS las variables deben ser definidas con LET (variable local) en vez de VAR (variable global)


## Seleccionar elementos del DOM

### Un elemento concreto
```html
<button id="btnAnimate">Anima cuadrado</button>
```
```js
let nodoBtnAnimate = document.querySelector( '#btnAnimate' );

console.log( nodoBtnAnimate );
```


## Cambiar propiedas de un NODO HTML

## Pintar en la web
### innerHTML
Podemos crear nuevo contenido HTML sutituyendo TODO el contenido que esté dentro del Nodo
```js
    let nodoSaludo = document.querySelector('#saludo');
    //Cuando queramos sustituir TODO el contenido
    nodoSaludo.innerHTML = "<p>NUEVO CONTENIDO</p>";
    //Cuando queramos añadir contenido SIN BORRAR el anterior
    nodoSaludo.innerHTML = nodoSaludo.innerHTML + "<p>OTRO NUEVO CONTENIDO</p>"

```

### innerText
Podemos añadir texto NO HTML sutituyendo TODO el contenido que esté dentro del Nodo
```js
    let nodoSaludo = document.querySelector('#saludo');
    nodoSaludo.innerText = "NUEVO CONTENIDO";
```

