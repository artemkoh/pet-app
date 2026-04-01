import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetCardComponent } from '../../shared/components/pet-card/pet-card.component';
import { PETS } from '../../shared/mock-data';
import { PetStatus } from '../../shared/models/pet.model';

@Component({
  selector: 'pet-list',
  standalone: true,
  imports: [PetCardComponent, FormsModule],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {
  allPets = PETS;
  filteredPets = [...this.allPets];

  searchQuery = '';
  selectedStatus = 'Всі';

  statuses = ['Всі', PetStatus.Available, PetStatus.Adopted, PetStatus.Reserved];

  filterItems() {
    this.filteredPets = this.allPets.filter(pet => {
      const matchesSearch = pet.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesStatus = this.selectedStatus === 'Всі' || pet.status === this.selectedStatus;
      
      return matchesSearch && matchesStatus;
    });
  }

  resetFilters(element: HTMLInputElement) {
    this.searchQuery = '';
    this.selectedStatus = 'Всі';
    this.filterItems(); 
    element.focus(); 
  }
}