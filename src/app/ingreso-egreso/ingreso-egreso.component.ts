import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  ActivarLoadingAction,
  DesactivarLoadingAction
} from '../shared/ui.actions';
import * as fromIngresoEgreso from './ingreso-egreso.reducer';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  forma: FormGroup;
  tipo = 'ingreso';
  loadingSubscription: Subscription = new Subscription();
  cargando: boolean;

  constructor(
    public ingresoEgresoService: IngresoEgresoService,
    private store: Store<fromIngresoEgreso.AppState>
  ) {}

  ngOnInit() {
    this.loadingSubscription = this.store.select('uiLoad').subscribe(uiLoad => {
      this.cargando = uiLoad.isLoading;
    });
    this.forma = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      monto: new FormControl(0, Validators.min(1))
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

  crearIngresoEgreso() {
    this.store.dispatch(new ActivarLoadingAction());
    const ingresoEgreso = new IngresoEgreso({
      ...this.forma.value,
      tipo: this.tipo
    });
    this.ingresoEgresoService
      .crearIngresoEgreso(ingresoEgreso)
      .then(resp => {
        Swal.fire({
          title: 'Creado con éxito!',
          text: `Creado: ${ingresoEgreso.descripcion}`,
          type: 'success',
          confirmButtonText: 'Cool'
        });
        this.store.dispatch(new DesactivarLoadingAction());
      })
      .catch(error => {
        this.store.dispatch(new DesactivarLoadingAction());
      });
    this.forma.reset({
      monto: 0
    });
  }
}
