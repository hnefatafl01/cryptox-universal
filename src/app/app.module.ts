import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { NavComponent } from './nav/nav.component';
import { AppReducer } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cryptox'}),
    StoreModule.forRoot({ currencies: AppReducer}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
