import { AutomovilComponent } from './automovil/automovil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  
  {path: 'automovil', component: AutomovilComponent},
  {path: '',  redirectTo: '/automovil', pathMatch: 'full'},
  /* {path: '**',  component: NopagefoundComponent}, */
];



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
