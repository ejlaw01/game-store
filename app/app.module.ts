import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { GameListComponent } from './game-list.component';
import { GameCheckoutComponent } from './game-checkout.component';
import { FilterPipe } from './filter.pipe';
import { CheckoutPipe } from './checkout.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GameListComponent,
    GameCheckoutComponent,
    FilterPipe,
    CheckoutPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
