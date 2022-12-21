import './Cronometro.css';
import { Fragment , useState } from 'react';

export default function Cronometro (){

    const  [diferencia, setDiferencia]       = useState(0);
    const  [intervalCrono, setIntervalCrono] = useState();
    const  [arrayTiempos, setArrayTiempos]   = useState([]);
    
    const iniciarIntervalo = (tiempoTranscurrido) => {
        clearInterval(intervalCrono);
        console.log(tiempoTranscurrido);
        let empiezaCrono = new Date().getTime();
        setIntervalCrono(setInterval(()=>{
            setDiferencia(()=>{
                return (new Date().getTime()+tiempoTranscurrido) - empiezaCrono;
            });
        },10));
    }

    const convertirCentesimas = ()=>{
        let centesimas = (Math.trunc((diferencia/10)%100) < 10) ? '0'+Math.trunc((diferencia/10)%100) : Math.trunc((diferencia/10)%100);
        return centesimas;
    }

    const convertirSegundos = ()=>{
        let segundos = (Math.trunc((diferencia/1000)%60) < 10) ? '0'+Math.trunc((diferencia/1000)%60) : Math.trunc((diferencia/1000)%60);
        return segundos;
    }

    const convertirMinutos = ()=>{
        let minutos = (Math.trunc((diferencia/60000)%60) < 10) ? '0'+Math.trunc((diferencia/60000)%60) : Math.trunc((diferencia/60000)%60);
        return minutos;
    }

    const convertirHoras = ()=>{
        let horas = (Math.trunc((diferencia/(60000*60))%60) < 10) ? '0'+Math.trunc((diferencia/(60000*60))%60) : Math.trunc((diferencia/(60000*60))%60);
        return horas;
    }

    const pauseCrono = () =>{
        clearInterval(intervalCrono);
    }

    const continueCrono = () =>{
        let tiempoTranscurrido = (convertirHoras()*60*60*1000)+(convertirMinutos()*60*100)+(convertirSegundos()*1000)+(convertirCentesimas()*10); 
        iniciarIntervalo(tiempoTranscurrido);
    }

    const saveData = ()=>{
        let nuevoTiempo = convertirHoras()+':'+convertirMinutos()+':'+convertirSegundos()+':'+convertirCentesimas();
        setArrayTiempos([...arrayTiempos,nuevoTiempo]);
    }

    const eliminar = (tiempo) =>{
        setArrayTiempos([...arrayTiempos, arrayTiempos.filter()])
    }

    const getTiempos = () =>{
        return arrayTiempos.map((cadaTiempo,index) =>{
            return  <div key={index} className='time'>
                        <div className='value'>{cadaTiempo}</div>
                        <span onClick={()=>{eliminar(cadaTiempo)}}>X</span>
                    </div>
        })
    }

    const reset = () =>{
        clearInterval(intervalCrono);
        setArrayTiempos([]);
        setDiferencia(0);
    }

    return(
    <Fragment>
        <div className="crono">
            <div className="tiempo">
                <div className="horas">{convertirHoras()}</div>
                <span>:</span>
                <div className="minutos">{convertirMinutos()}</div>
                <span>:</span>
                <div className="segundos">{convertirSegundos()}</div>
                <span>:</span>
                <div className="centesimas">{convertirCentesimas()}</div>
            </div>
            <div className="botonera">
                <div className="boton" id="start" onClick={()=>iniciarIntervalo(0)}>Empezar</div>
                <div className="boton" id="pause" onClick={pauseCrono}>Parar</div>
                <div className="boton" id="save" onClick={saveData}>Guardar</div>
                <div className="boton" id="continue" onClick={continueCrono}>Continuar</div>
                <div className="boton" id="reset" onClick={reset}>Resetear</div>
            </div>
            <div className="tiemposGuardados">
            {getTiempos()}
            </div>
        </div>
    </Fragment>
    )
}