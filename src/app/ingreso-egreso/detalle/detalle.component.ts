import { Component, OnInit, OnDestroy } from '@angular/core';

// NgRx
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';

import * as fromIngresoEgreso from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {
  items: IngresoEgreso[];
  detalleSubscription: Subscription = new Subscription();

  constructor(
    private store: Store<fromIngresoEgreso.AppState>,
    public ingresoEgresoService: IngresoEgresoService
  ) {}

  ngOnInit() {
    this.detalleSubscription = this.store
      .select('ingresoEgreso')
      .subscribe(ingresoEgreso => {
        this.items = ingresoEgreso.items;
      });
  }

  ngOnDestroy() {
    this.detalleSubscription.unsubscribe();
  }

  borrarItem(item: IngresoEgreso) {
    this.ingresoEgresoService
      .borrarIngresoEgreso(item)
      .then(resp => {
        Swal.fire({
          title: 'Borrado con éxito',
          text: `Registro eliminado ${item.descripcion}`,
          type: 'error',
          confirmButtonText: 'Cool'
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Error al borrar registro',
          text: error.message,
          type: 'error',
          confirmButtonText: 'Cool'
        });
      });
  }
}
