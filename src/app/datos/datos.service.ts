import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Pais[] = [
    {
      nombre: 'Argentina',
      capital: 'Buenos Aires',
      idiomas: 'Español',
      continente: 'América del Sur'
    },
    {
      nombre: 'Brasil',
      capital: 'Brasilia',
      idiomas: 'Portugués',
      continente: 'América del Sur'
    },
    {
      nombre: 'Estados Unidos',
      capital: 'Washington',
      idiomas: 'Inglés',
      continente: 'América del Norte'
    },
    {
      nombre: 'España',
      capital: 'Madrid',
      idiomas: 'Español',
      continente: 'Europa'
    },
    {
      nombre: 'Japón',
      capital: 'Tokio',
      idiomas: 'Japonés',
      continente: 'Asia'
    },
    {
      nombre: 'Australia',
      capital: 'Canberra',
      idiomas: 'Inglés',
      continente: 'Oceanía'
    },
    {
      nombre: 'Egipto',
      capital: 'El Cairo',
      idiomas: 'Árabe',
      continente: 'África'
    },
    {
      nombre: 'Sudáfrica',
      capital: 'Pretoria',
      idiomas: 'Inglés',
      continente: 'África',
    },
    {
      nombre: 'Canadá',
      capital: 'Ottawa',
      idiomas: 'Inglés',
      continente: 'América del Norte'
    },
    {
      nombre: 'Rusia',
      capital: 'Moscú',
      idiomas: 'Ruso',
      continente: 'Europa/Asia'
    }
  ];

  getData(): Observable<Pais[]> {
    
    return of(this.datos).pipe(delay(2000));
  }
}
