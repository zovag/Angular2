import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { LogInComponent } from './log-in/log-in.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LastPageComponent } from './last-page/last-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PaymentPageComponent,
    LastPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
