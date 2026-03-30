import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/app-info.model';

@Component({
  selector: 'pet-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public headerConfig: AppInfo = {
    title: 'Мій Пухнастий Друг — поради та догляд',
    year: 2026
  };
}