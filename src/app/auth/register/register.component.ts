import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {
  cargando: boolean;
  subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, public store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('uiLoad').subscribe(uiLoad => {
      this.cargando = uiLoad.isLoading;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(data: any) {
    this.authService.crearUsuario(data.nombre, data.email, data.password);
  }
}
