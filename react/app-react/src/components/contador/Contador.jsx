import './Contador.css';
import { Fragment , useState } from 'react';

//El nombre de la función es el nombre de la ETIQUETA HTML del componente
export default function Contador (){

    //STATE
    // [getter , setter] = useState(<ValorInicial>)
    const [contador, setContador] = useState(0);

    const [asteriscos, setAsteriscos] = useState('*');
  
    const crecer = () =>{
        
        //REASIGNACION (contador = contador +1)!!! PROHIBIDO!!!
        // contador ++;
        //Hay que gestionar esto mediante STATE de React
        console.log(contador);
        setContador(contador + 1 );
        setAsteriscos( asteriscos + '*');
    }

    const decrecer = () =>{
        setContador(contador - 1 );
        setAsteriscos( asteriscos.slice(0, -1));
    }

    {/* OPCION 3 (RECOMENDADA) de ngIf PAR */}
    const muestraParImpar = () => {
        console.log('hola');
        if(contador % 2 === 0){
            return (<div className='par'>PAR</div>)
        }
        return (<div className='impar'>IMPAR</div>)
    }

    return(
    <Fragment>
        <h2>Contador : {contador}</h2>
        <div>
            {/* OPCION 1 de ngIf PAR  */}
            {/* {
             (contador % 2 === 0) ? 'PAR' : 'IMPAR' 
            } */}

            {/* OPCION 2 de ngIf PAR */}
            {/*Condición y <HTML_JSX>*/
            // (contador % 2 === 0) && <p className="par">PAR</p>
            }
            {/*Condición y <HTML_JSX>*/
            // (contador % 2 !== 0) && <p className="impar">IMPAR</p>
            }

            {/* OPCION 3 (RECOMENDADA) de ngIf PAR */}

            {
                muestraParImpar()
            }


        </div>

        <div className="gridButtonsContador">
            <button onClick={crecer}>Crecer</button>
            <button onClick={decrecer}>Decrecer</button>
        </div>

        <h2>Asteriscos : {asteriscos}</h2>

    </Fragment>
    )

    
}