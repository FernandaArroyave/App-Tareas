import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Welcome = 'Hola!';
  tasks = [ /*Crear una lista*/ 
    'Instalaa el Angular CLI',
    'Crear Proyecto',
    'Crear componentes'
  ]
}
