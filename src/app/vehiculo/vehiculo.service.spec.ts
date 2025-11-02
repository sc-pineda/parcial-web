import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ListaVehiculoComponent } from './lista-vehiculo/lista-vehiculo.component';
import { Vehiculo } from './vehiculo';
import { By } from '@angular/platform-browser';

describe('Service: Vehiculo', () => {
  let vehiculoComponent: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;
  let debug: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService],
      declarations: [ListaVehiculoComponent],
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculoComponent);
    vehiculoComponent = fixture.componentInstance;
    vehiculoComponent.vehiculos = [
      new Vehiculo(faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.model(),
        faker.number.int({ min: 1990, max: 2026 }),
        faker.number.int({ min: 0, max: 300000 }),
        faker.vehicle.color(), faker.image.url())
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  })

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  it("Component has a table", () =>{
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  })

  it("should have an td element", () =>{
    const td = debug.queryAll(By.css('td'));
    const content: HTMLElement = td[1].nativeElement;
    expect(content.textContent).toEqual(vehiculoComponent.vehiculos[0].marca);
  })
});
