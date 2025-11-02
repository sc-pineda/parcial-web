import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';
import { ListaVehiculoComponent } from './lista-vehiculo/lista-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [VehiculoComponent, ListaVehiculoComponent],
  exports: [VehiculoComponent, ListaVehiculoComponent]
})
export class VehiculoModule { }
