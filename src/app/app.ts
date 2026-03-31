import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PetListComponent } from './features/pet-list/pet-list.component'; // Додали для 2-ї лаби

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PetListComponent], 
  templateUrl: './app.html',
})
export class AppComponent {}