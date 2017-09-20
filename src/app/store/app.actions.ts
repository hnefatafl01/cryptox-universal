import { Action } from '@ngrx/store';
import { Currency } from '../shared/currency.model';

export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';

export class LoadCurrencies implements Action {
  readonly type = LOAD_CURRENCIES;
  constructor(public payload: Currency[]) {}
}

export type CurrencyListActions = LoadCurrencies;
