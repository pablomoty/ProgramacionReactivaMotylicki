import { Component, OnDestroy } from '@angular/core';
import { DatosService } from '../datos/datos.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pais } from '../models/pais'; 

@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.scss']
})
export class MostrarDatosComponent implements OnDestroy {
  
  datos$: Observable<Pais[]>;
  columnas: string[] = ['nombre', 'capital', 'idiomas', 'continente'];

  private unsubscribe$ = new Subject<void>();

  constructor(private datosService: DatosService) {
    this.datos$ = this.datosService.getData().pipe(
      map(datos => this.modificarDatos(datos))
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  modificarDatos(datos: Pais[]): Pais[] {
    return datos.map(pais => ({
      ...pais,
      nombre: pais.nombre.toUpperCase()
    }));
  }
}
