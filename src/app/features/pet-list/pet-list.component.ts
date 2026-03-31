import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from '../../shared/components/pet-card/pet-card.component';
import { PETS } from '../../shared/mock-data';

@Component({
  selector: 'pet-list',
  standalone: true,
  imports: [CommonModule, PetCardComponent],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {
  pets = PETS;
}