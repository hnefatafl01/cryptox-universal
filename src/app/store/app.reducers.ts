import { Store } from '@ngrx/store';
import { Currency } from '../shared/currency.model';

export interface AppState {
  currenciesList: State;
}

export interface State {
  currencies: Currency[];
}

