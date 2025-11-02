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
  totalPorMarca: { [marca: string]: number } = {};

  getVehiculoList() {
    return this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.calcularTotales()
    })
  }

  calcularTotales(): void {
    this.totalPorMarca = {}
    for (const vehiculo of this.vehiculos) {
      if (this.totalPorMarca[vehiculo.marca]) {
        this.totalPorMarca[vehiculo.marca]++;
      } else {
        this.totalPorMarca[vehiculo.marca] = 1;
      }
    }
  }

  ngOnInit() {
    this.getVehiculoList()
  }

}
