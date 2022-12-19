import './Cronometro.css';
import { Fragment , useState } from 'react';
import { useEffect } from 'react';

//El nombre de la función es el nombre de la ETIQUETA HTML del componente
export default function Cronometro (){

    const  [diferencia, setDiferencia] = useState(0);
    const  [centesima, setCentesima]   = useState(0);
    const  [segundo, setSegundo]       = useState(0);
    const  [minuto, setMinuto]         = useState(0);
    const  [hora, setHora]             = useState(0);
    // const  [interval, setInterval]     = useState();

    const iniciarIntervalo = () => {
        let empiezaCrono = new Date().getTime();
        useEffect( () =>{

            const interval = setInterval(()=>{
                console.log('Intervalo');
                setDiferencia((new Date().getTime()) - empiezaCrono);
                console.log(diferencia);
    
                setCentesima(Math.trunc((diferencia/10)%100));
                setSegundo(Math.trunc((diferencia/1000)%60));
                setMinuto(Math.trunc((diferencia/60000)%60));
                setHora(Math.trunc((diferencia/(60000*60))%60));
            },10);
            return () => {
                clearInterval(interval);
              };
        }, empiezaCrono)
    }

    return(
    <Fragment>
        <div className="crono">
    <div className="tiempo">
        <div className="horas">{hora}</div>
        <span>:</span>
        <div className="minutos">{minuto}</div>
        <span>:</span>
        <div className="segundos">{segundo}</div>
        <span>:</span>
        <div className="centesimas">{centesima}</div>
    </div>
    <div className="botonera">
        <div className="boton" id="start" onClick={iniciarIntervalo}>Empezar</div>
        {/* <div className="boton" id="pause" onClick="pauseCrono()">Parar</div>
        <div className="boton disabled" id="save">Guardar</div>
        <div className="boton" id="continue" onClick="continueCrono()">Continuar</div>
        <div className="boton" id="reset" onClick="resetCrono()">Resetear</div> */}
    </div>
    <div className="tiemposGuardados"></div>
    </div>

    </Fragment>
    )

    
}