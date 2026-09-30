import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombre = 'Daniel Arias García';
  profesion = 'Tecnico de Sistemas Microinformáticos y Redes';
  profesion2 = 'Desarrollador de Aplicaciones Multiplataforma en formación';
}
