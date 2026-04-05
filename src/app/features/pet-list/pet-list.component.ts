import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PetCardComponent } from '../../shared/components/pet-card/pet-card.component';
import { PetService } from '../../shared/services/pet.service';
import { Pet, PetStatus } from '../../shared/models/pet.model';

@Component({
  selector: 'pet-list',
  standalone: true,
  imports: [PetCardComponent, FormsModule, AsyncPipe],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {
  private petService = inject(PetService);

  pets$!: Observable<Pet[] | null>;

  searchQuery = '';
  selectedStatus = 'Всі';
  statuses = ['Всі', PetStatus.Available, PetStatus.Adopted, PetStatus.Reserved];

  ngOnInit(): void {
    this.pets$ = this.petService.items$;
  }

  filterItems(): void {
    this.petService.updateFilters(this.searchQuery, this.selectedStatus);
  }

  resetFilters(element: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'Всі';
    this.filterItems();
    element.focus();
  }

  handleCardAction(id: number): void {
    this.petService.deleteItem(id);
  }
}