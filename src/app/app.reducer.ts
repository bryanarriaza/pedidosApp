import { ActionReducerMap } from '@ngrx/store';
import * as fromUILoad from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
// import * as fromIngresoEgreso from './ingreso-egreso/ingreso-egreso.reducer';

export interface AppState {
  uiLoad: fromUILoad.State;
  auth: fromAuth.AuthState;
  // ingresoEgreso: fromIngresoEgreso.IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  uiLoad: fromUILoad.uiReducer,
  auth: fromAuth.authReducer,
  // ingresoEgreso: fromIngresoEgreso.ingresoEgresoReducer
};
