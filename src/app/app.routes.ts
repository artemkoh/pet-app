import { Routes } from '@angular/router';
import { PetListComponent } from './features/pet-list/pet-list.component';
import { PetDetailsComponent } from './features/pet-details/pet-details';
import { NotFoundComponent } from './core/pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: PetListComponent },
  { path: 'pet/:id', component: PetDetailsComponent },
  { path: '**', component: NotFoundComponent }
];