export enum PetStatus {
    Available = 'Доступний',
    Adopted = 'Вже в родині',
    Reserved = 'Заброньовано'
}

export interface PetDetails {
    weight: number;
    breed: string;
    isVaccinated: boolean;
}

export interface Pet {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  birthDate: Date;
  status: PetStatus;
  tags: string[];
  isSpecial?: boolean; 
  details?: PetDetails; 
}