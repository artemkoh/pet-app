import { Component } from '@angular/core';

@Component({
  selector: 'pet-footer',
  standalone: true,
  template: `<footer style="text-align: center; padding: 20px; color: #7f8c8d; font-size: 0.9em;">
               <p>&copy; 2026 Всі права на пухнастиків захищені</p>
             </footer>`,
  styles: []
})
export class FooterComponent {}