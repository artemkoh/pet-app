import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Pet, PetStatus } from '../../models/pet.model'; 

@Component({
  selector: 'pet-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, DatePipe, UpperCasePipe], 
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
  @Input() pet!: Pet; 
  @Output() actionClicked = new EventEmitter<number>();

  public PetStatus = PetStatus; 

  onActionClick() {
    this.actionClicked.emit(this.pet.id);
  }
}