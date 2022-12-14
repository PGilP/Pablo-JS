import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-pagina-alumnos',
  templateUrl: './pagina-alumnos.component.html',
  styleUrls: ['./pagina-alumnos.component.scss']
})
export class PaginaAlumnosComponent implements OnInit {

  public entradaNombre: string = '';
  public alumnos:Alumno[] = [
    {nombre:'Carlos', apellidos: 'Rodríguez', fecha: 2000, nota:7},
    {nombre:'Sara',   apellidos: 'Prieto',    fecha: 1995, nota:4},
    {nombre:'José',   apellidos: 'Bueno',     fecha: 2003, nota:9},
    {nombre:'Juan',   apellidos: 'Valbuena',  fecha: 2003, nota:6},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public aprobar(alumno:Alumno){
    console.log(alumno);
    alumno.nota = 5;
    console.log(this.alumnos);
  }

  public add(){
    console.log('Añado alumno');
    this.alumnos.push({
      nombre: this.entradaNombre,
      apellidos : '',
      fecha: 1991,
      nota: 7
    });
    this.entradaNombre = '';
  }

}
