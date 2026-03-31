import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input({ required: true }) pet!: Pet;
}