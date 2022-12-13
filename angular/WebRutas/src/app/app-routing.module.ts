import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronometroComponent } from './components/cronometro/cronometro.component';

const routes: Routes = [{ path: 'cronometro', component: CronometroComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
