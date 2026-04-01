import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetCardComponent } from '../../shared/components/pet-card/pet-card.component';
import { PetService } from '../../shared/services/pet.service';
import { Pet, PetStatus } from '../../shared/models/pet.model';
@Component({
  selector: 'pet-list',
  standalone: true,
  imports: [PetCardComponent, FormsModule],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit {

  private petService = inject(PetService);

  filteredPets: Pet[] = [];
  searchQuery = '';
  selectedStatus = 'Всі';
  statuses = ['Всі', PetStatus.Available, PetStatus.Adopted, PetStatus.Reserved];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.filteredPets = this.petService.getAll();
  }

  filterItems(): void {
    this.filteredPets = this.petService.filterItems(this.searchQuery, this.selectedStatus);
  }

  resetFilters(element: HTMLInputElement): void {
    this.searchQuery = '';
    this.selectedStatus = 'Всі';
    this.loadData();
    element.focus();
  }

  handleCardAction(id: number): void {
    this.petService.deleteItem(id);
    
    if (this.searchQuery || this.selectedStatus !== 'Всі') {
      this.filterItems();
    } else {
      this.loadData();
    }
  }
}