import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, debounceTime, distinctUntilChanged, of } from 'rxjs';
import { PETS } from '../mock-data';
import { Pet } from '../models/pet.model';
import { FilterOptions } from '../models/filter-options.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private allPets: Pet[] = PETS;

  private itemsSubject$ = new BehaviorSubject<Pet[] | null>(null);
  public items$: Observable<Pet[] | null> = this.itemsSubject$.asObservable();

  private filterSubject$ = new BehaviorSubject<FilterOptions>({ query: '', status: 'Всі' });

  constructor() {
    this.filterSubject$.pipe(
      debounceTime(500), // Чекаємо 0.5с після вводу
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)), 
      delay(1000),
      map(options => {
        return this.allPets.filter(pet => {
          const matchesQuery = pet.name.toLowerCase().includes(options.query.toLowerCase());
          const matchesStatus = options.status === 'Всі' || pet.status === options.status;
          return matchesQuery && matchesStatus;
        });
      })
    ).subscribe(filteredResult => {
      this.itemsSubject$.next(filteredResult);
    });
  }

  updateFilters(query: string, status: string): void {
    this.itemsSubject$.next(null);
    this.filterSubject$.next({ query, status });
  }

  deleteItem(id: number): void {
    this.allPets = this.allPets.filter(item => item.id !== id);
    this.filterSubject$.next(this.filterSubject$.value);
  }

  getById(id: number | string): Observable<Pet | undefined> {
    const numericId = Number(id);
    const pet = this.allPets.find(p => p.id === numericId);
    return of(pet).pipe(delay(1000)); 
  }

}
