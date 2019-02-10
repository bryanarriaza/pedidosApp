import { ActionReducerMap } from '@ngrx/store';
import * as fromUILoad from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    uiLoad: fromUILoad.State;
    auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    uiLoad: fromUILoad.uiReducer,
    auth: fromAuth.authReducer
};
