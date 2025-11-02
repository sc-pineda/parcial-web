export class Vehiculo {
    id: number;
    marca: string;
    linea: string;
    referencia: string;
    modelo: number;
    kilometraje: number;
    color: string;
    imagen: string;

public constructor(id: number, marca: string, linea: string, referencia: string, modelo: number, kilometaje: number, color: string, imagen: string) {
    this.id = id;
    this.marca = marca;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometaje;
    this.color = color;
    this.imagen = imagen;
    }
}