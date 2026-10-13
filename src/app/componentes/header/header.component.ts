import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() nombre = '';
  @Input() profesion = '';
  @Input() profesion2 = '';
  @Input() seccionActiva:
    | 'sobre-mi'
    | 'experiencia'
    | 'formacion'
    | 'tecnologias' = 'sobre-mi';
  @Output() seccionChange = new EventEmitter<'sobre-mi' | 'experiencia' | 'formacion' | 'tecnologias'>();

  cambioSeccion(seccion: 'sobre-mi' | 'experiencia' | 'formacion' | 'tecnologias') {
    this.seccionChange.emit(seccion);
  }
}
