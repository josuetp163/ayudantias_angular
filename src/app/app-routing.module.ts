import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "../app/pages/inicio/inicio.component";
import { InformacionComponent } from "../app/pages/informacion/informacion.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path:"inicio", component:InicioComponent, canActivate: [AuthGuard]}, 
  { path:"informacion", component: InformacionComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
