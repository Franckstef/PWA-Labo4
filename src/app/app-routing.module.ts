import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { DevisesComponent } from './components/devises/devises.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

const routes: Routes = [
  { path: 'devises', component: DevisesComponent },
  { path: 'temperature', component: TemperatureComponent },
 ];
 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
