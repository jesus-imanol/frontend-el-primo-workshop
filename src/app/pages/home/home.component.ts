import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
