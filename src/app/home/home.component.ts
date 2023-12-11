import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  isMenuOpen:boolean = false

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
  

}
