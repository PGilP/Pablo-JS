import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {

  public fechaStart: Date = new Date();
  
  public diferencia:number = 0; 
  public centesima:number  = 0;
  public segundo:number    = 0;
  public minuto:number     = 0;
  public hora:number       = 0;

  public interval:NodeJS.Timer | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }


  iniciarIntervalo(tiempoTranscurrido:number){
    let empiezaCrono = new Date().getTime();
    this.interval = setInterval(()=>{
        
        this.diferencia = ((new Date().getTime()+tiempoTranscurrido) - empiezaCrono);

        this.centesima  = Math.trunc((this.diferencia/10)%100);
        this.segundo    = Math.trunc((this.diferencia/1000)%60);
        this.minuto     = Math.trunc((this.diferencia/60000)%60);
        this.hora       = Math.trunc((this.diferencia/(60000*60))%60);
    },10);
  }

  pauseCrono(){
    clearInterval(this.interval);
  }

  continueCrono(){

    let tiempoTranscurrido = (this.hora*60*60*1000)+(this.minuto*60*100)+(this.segundo*1000)+(this.centesima*10);  
    
    clearInterval(this.interval);
    this.iniciarIntervalo(tiempoTranscurrido);
  }

  resetCrono(){
    clearInterval(this.interval);

    this.centesima  = 0;
    this.segundo    = 0;
    this.minuto     = 0;
    this.hora       = 0;
    
  }
}
