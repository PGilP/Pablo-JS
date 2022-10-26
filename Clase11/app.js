'use strict'

let nodoResultado = document.querySelector( '#resultado' );
let nodoAlumno = document.querySelectorAll( '.alumno' );

let alumno1 = {
nombre: 'Pepe',
apelidos: 'Parra Tur',
    anoNacimiento: 2000,
    nota: 8.5,
    edad : function (){
        return calcularEdad(this.anoNacimiento);
    } 
}
let alumno2 = {
    nombre: 'Juan',
    apelidos: 'Parrales Peral',
    anoNacimiento: 1994,
    nota: 6.5,
    edad : function (){
        return calcularEdad(this.anoNacimiento);
    } 
}
let alumno3 = {
    nombre: 'Marta',
    apelidos: 'García Montoro',
    anoNacimiento: 1980,
    nota: 3.5,
    edad : function (){
        return calcularEdad(this.anoNacimiento);
    } 
}
let profesor1 = {
    nombre: 'Alberto',
    apellidos: 'Rodríguez Benítez',
    DNI: '55555555V',
    anoNacimiento : 1990,
    edad : function (){
        return calcularEdad(this.anoNacimiento);
    } 
}

let asignatura = {
    nombre:      'JavaScript',
    fechaInicio: new Date('2022-05-10'),
    profesor:    profesor1,
    alumnos:     [alumno1,alumno2,alumno3],
    numAlumnos:   function(){
        return this.alumnos.length
    }
}

function calcularEdad(anoNacimiento){
    let anoActual = Number(new Date().getFullYear());
    return anoActual - anoNacimiento;
}
console.log(calcularEdad(1900));

console.log(asignatura);


let pintarDatos = '';


for (let i = 0; i < asignatura.alumnos.length; i++) {
    let nombre = asignatura.alumnos[i].nombre;
    let nota = asignatura.alumnos[i].nota;
    let apellidosAlumno = asignatura.alumnos[i].apelidos;
    let edadAlumno = asignatura.alumnos[i].edad();
    
    pintarDatos += 
            `<div class="alumno">
                <h1>${nombre+' '+ apellidosAlumno}</h1>
                <div class="nota">Nota: ${nota}</div>
                <div class="edad">Edad: ${edadAlumno}</div>
            </div>`;
        
}

nodoResultado.innerHTML = pintarDatos;