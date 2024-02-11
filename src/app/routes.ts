import { Routes } from "@angular/router";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { DogListComponent } from "./features/dog-list/dog-list.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: DogListComponent },
  { path: 'details/:index', loadComponent: () => import('./features/dog-list/details/dog-details/dog-details.component')
    .then(m => m.DogDetailsComponent)  
  }
];