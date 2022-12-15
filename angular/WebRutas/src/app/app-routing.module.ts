import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';
import { PaginaAlumnosComponent } from './components/pagina-alumnos/pagina-alumnos.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

const routes: Routes = 
[
{ path: 'cronometro', component: CronometroComponent },
{ path: 'alumnos', component: PaginaAlumnosComponent },
{ path: 'imagenes', component: GridImagenesComponent },
{ path: 'toDoList', component: ToDoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
