import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { routes } from "./app.routes";
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
