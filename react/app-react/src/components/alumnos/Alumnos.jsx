import './Alumnos.css';
import {  useState,useRef } from 'react';
import { useEffect } from 'react';


export default function Alumnos (props){

    const entradaAlumno = useRef()/*Sirve para inputs -> doble enlace Angular*/;

    const [alumnos, setAlumnos] = useState([
        {nombre: 'Marta', apellido: 'Seara', nota: 5},
        {nombre: 'Marcos', apellido: 'Seru', nota: 10},
        {nombre: 'María', apellido: 'Gómez', nota: 4},
    ])

    /*
        REACT : 
            Acción primaria   -> Pintar en el DOM los cambios que hay en el estado
            useEffect -> Efecto secundario -> Detecta y actúa cuando ha habido un cambio en el STATE -> Detecta todos los cambios 

    */
    useEffect(()=>{
        console.log('Cambio en el STATE');
    })

    
    useEffect(()=>{
        console.log('Cambio en STATE ALUMNOS')
    },[alumnos]/*Sólo detecta los cambios en Alumnos o en todas las variables que concatenes*/);

    useEffect(()=>{
        console.log('Se ejecuta al principio')
    },[]/*Se ejecuta al principio -> ngOnInit de Angular */ );

    // OPCIÓN 2 ngFor
    const getAlumnos = () =>{
        return alumnos.map((cadaAlumno,index) =>{
            return <div key={index} className='alumno'>{cadaAlumno.nombre}</div>
        })
    }

    const add = () => {
        console.log(entradaAlumno);
        console.log(entradaAlumno.current.value);

        let alumnoNuevo ={
            nombre: entradaAlumno.current.value,
            apellido: 'Doe',
            nota: Math.floor(Math.random() * 10)
        }
        setAlumnos([...alumnos,alumnoNuevo]);
        console.log(alumnos);
    }

    return(
        <>
            <h1>Alumnos - {props.clase}</h1>

            <div className='gridAlumnos'>
                {/* OPCIÓN 1 ngFor */}
                {/* {
                    alumnos.map(cadaAlumno => {
                        return <div className='alumno'>{cadaAlumno.nombre}</div>
                    })
                } */}

                <input type="text" ref={entradaAlumno} />
                <button onClick={add}>Añadir</button>

                {/* OPCIÓN 2 ngFor */}
                {getAlumnos()}
            </div>
        </>
    )
}