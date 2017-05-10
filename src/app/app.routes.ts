import { Routes } from "@angular/router";

import { MainBoardComponent } from "./main-board/main-board.component";
import { FilmCardComponent } from "./film-card/film-card.component";


export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: MainBoardComponent },
    { path: "films",         component: FilmCardComponent }
];