import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resize-image',
  templateUrl: './resize-image.component.html',
  styleUrls: ['./resize-image.component.css']
})
export class ResizeImageComponent implements OnInit {

  public ancho: number = 200;
  public alto: number = 200;
  public id: number = 237;
  public url_image: string = 'https://picsum.photos/';
  
  constructor() { }

  ngOnInit(): void {
  }

  public creceAncho(){
    this.ancho += 50;
  }

  public decreceAncho(){
    this.ancho -= 50;
  }

  public creceAlto(){
    this.alto += 50;
  }

  public decreceAlto(){
    this.alto -= 50;
  }

  public changeImage(){
    this.id++;
  }

  public errorCarga(){
    console.log('Error de carga');
    this.id++;
  }
}
