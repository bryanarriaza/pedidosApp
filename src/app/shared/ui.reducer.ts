import * as fromUILoad from './ui.actions';

export interface State {
  isLoading: boolean;
}

const initState: State = {
  isLoading: false
};

export function uiReducer(
  state = initState,
  action: fromUILoad.loadActions
): State {
  switch (action.type) {
    case fromUILoad.ACTIVAR_LOADING:
      return {
        isLoading: true
      };
    case fromUILoad.DESACTIVAR_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}
