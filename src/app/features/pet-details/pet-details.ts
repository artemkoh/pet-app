import { Component, Input, OnInit, inject } from '@angular/core';
import { AsyncPipe, DatePipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { PetService } from '../../shared/services/pet.service';
import { Pet } from '../../shared/models/pet.model';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [AsyncPipe, RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './pet-details.html',
  styleUrl: './pet-details.css'
})
export class PetDetailsComponent implements OnInit {
  private petService = inject(PetService);

  @Input() id!: string; 
  
  pet$!: Observable<Pet | undefined>;

  ngOnInit(): void {
    this.pet$ = this.petService.getById(this.id);
  }
}