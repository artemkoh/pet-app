import { Injectable } from '@angular/core';
import { PETS } from '../mock-data';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private items: Pet[] = PETS;

  getAll(): Pet[] {
    return [...this.items];
  }

  getById(id: number): Pet | undefined {
    return this.items.find(item => item.id === id);
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  filterItems(query: string, status: string): Pet[] {
    return this.items.filter(pet => {
      const matchesSearch = pet.name.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === 'Всі' || pet.status === status;
      
      return matchesSearch && matchesStatus;
    });
  }
}