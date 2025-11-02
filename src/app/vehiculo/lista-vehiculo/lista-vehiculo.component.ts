import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculos: Array<Vehiculo> = [];

  getVehiculoList(){
    return this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    })
  }

  ngOnInit() {
    this.getVehiculoList()
  }

}
