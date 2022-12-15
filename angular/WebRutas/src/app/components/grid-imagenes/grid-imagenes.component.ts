import { Component, OnInit } from '@angular/core';
import { Imagen } from 'src/app/models/imagenes.model';

@Component({
  selector: 'app-grid-imagenes',
  templateUrl: './grid-imagenes.component.html',
  styleUrls: ['./grid-imagenes.component.scss']
})
export class GridImagenesComponent implements OnInit {

  public arrayImagenes:Imagen[] = [
    {
        src   : 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Water_drop_001.jpg',
        class : ['water']
    },
    {
        src   : 'https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2021-06/wildfires_smoke_adobe_web.jpg?h=d1cb525d&itok=MP9Z3Vvx',
        class : ['fire','ground']
    },
    {
        src   : 'https://i.natgeofe.com/n/c199c917-f357-45b2-9940-77784ed98d2d/why-is-america-running-out-of-water_16x9.jpg',
        class : ['water']
    },
    {
        src   : 'https://img.staticmb.com/mbcontent//images/uploads/2021/9/the-process-of-buying-agricultural-land-in-india.jpg',
        class : ['ground']
    },
    {
        src   : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Firetora.jpg/1200px-Firetora.jpg',
        class : ['fire']
    },
    {
        src   : 'https://media.istockphoto.com/photos/purification-water-fountain-in-kyoto-japan-with-liquid-running-from-picture-id1235495974?k=20&m=1235495974&s=612x612&w=0&h=TmBQY9U666Jwb-NwahoZ5uwXEXemz-5rsRuiEAGQv6w=',
        class : ['water']
    }
  ];

  public filterState:string = '';
  public rutaImgLightbox:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  filter(newFilterState:string){
    this.filterState = newFilterState;
  }

  comprobarFiltro(filtros:string[]){
    return filtros.includes(this.filterState);
  }

  openImage(rutaImg:string){
    console.log(rutaImg);
    this.rutaImgLightbox = rutaImg;
  }

  closeImage(evento:Event){
    let target = <Element>evento.target;
    if(!target.classList.contains('imageLightBox')){
      this.rutaImgLightbox = '';
    }
  }

}
