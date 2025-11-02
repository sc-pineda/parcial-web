import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaVehiculoComponent } from './lista-vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Vehiculo } from '../vehiculo';
import { faker } from '@faker-js/faker';

describe('ListaVehiculoComponent', () => {
  let component: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculoComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculoComponent);
    component = fixture.componentInstance;
    component.vehiculos = [
      new Vehiculo(faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.model(),
        faker.number.int({ min: 1990, max: 2026 }),
        faker.number.int({ min: 0, max: 300000 }),
        faker.vehicle.color(), faker.image.url()),
      new Vehiculo(faker.number.int(),
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.model(),
        faker.number.int({ min: 1990, max: 2026 }),
        faker.number.int({ min: 0, max: 300000 }),
        faker.vehicle.color(), faker.image.url()),
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with 3 vehicle rows plus the header', () => {
    const rows = fixture.debugElement.queryAll(By.css('tr'));
    expect(rows.length).toBe(4);
  });
});
