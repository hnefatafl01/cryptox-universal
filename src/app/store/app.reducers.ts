import { Store } from '@ngrx/store';
import { Currency } from '../shared/currency.model';
import * as fromAppActions from './app.actions';

export interface AppState {
  currenciesList: State;
}

export interface State {
  currencies: Currency[];
}

export const initialState = {
  currencies: null
}

export function AppReducer(state = initialState, action: fromAppActions.CurrencyListActions) {
  console.log(action)
  // switch (action.type) {
  //   case LOAD_CURRENCIES:
  //     return {
  //       ...state
  //     };
  //   default:
  //     return state;
  // }

}

