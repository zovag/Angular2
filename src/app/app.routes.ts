import { Routes } from "@angular/router";

import { MainBoardComponent } from "./main-board/main-board.component";
// import { StatisticsComponent } from "./statistics/statistics.component";
import { FilmCardComponent } from "./film-card/film-card.component";
// import { TaskEditComponent } from "./task/edit/task-edit.component";


export const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full" },
    { path: "dashboard",    component: MainBoardComponent },
    // { path: "statistics",   component: StatisticsComponent },
    { path: "films",         component: FilmCardComponent }
    // { path: "task/:id",     component: TaskEditComponent },
    // { path: "task/new",     component: TaskEditComponent }
];
