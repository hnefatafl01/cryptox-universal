import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency.model';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor() { }

  currencies: Currency[];

  ngOnInit() {
    console.log("currencies loaded")
  }

}
