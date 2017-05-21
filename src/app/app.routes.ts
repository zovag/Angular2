import { Routes } from "@angular/router";

import { MainBoardComponent } from "./main-board/main-board.component";
// import { StatisticsComponent } from "./statistics/statistics.component";
import {FilmsListComponent} from './films-list/films-list.component';
import { FilmCardComponent } from "./film-card/film-card.component";
// import { TaskEditComponent } from "./task/edit/task-edit.component";


export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: MainBoardComponent },
    // { path: "statistics",   component: StatisticsComponent },
    { path: "filmslist",         component: FilmsListComponent }
    // { path: "task/:id",     component: TaskEditComponent },
    // { path: "task/new",     component: TaskEditComponent }
];
