import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador: number = 0;

  constructor() { 
    // Se ejecuta al construirse
    console.log('Contador Construido');
  }

  ngOnInit(): void {
    //Metodo que se ejecuta SIEMPRE AL INICIO del componente
    console.log('Contador Iniciado')
  }

  public decrece(): void{
    this.contador--;
  }

  public crece(): void{
    this.contador++;
  }

}
