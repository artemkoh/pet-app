import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Pet, PetStatus } from '../../models/pet.model';

@Component({
  selector: 'pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input({ required: true }) pet!: Pet;

  PetStatus = PetStatus; 

  @Output() actionClicked = new EventEmitter<number>();

  onBtnClick() {
    this.actionClicked.emit(this.pet.id);
  }
}