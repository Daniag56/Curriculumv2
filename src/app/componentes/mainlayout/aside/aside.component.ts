import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  @Input() mostrarDatosPersonales = true;
  @Input() nombre = '';
  @Input() edad = 0;
  @Input() direccion = '';
  @Input() ciudad = '';
  @Input() telefono = '';
  @Input() correoElectronico = '';
  @Input() github = '';
  @Input() idiomaNativo = '';
  @Input() idiomaSecundario = '';
  @Output() toggleDatosPersonales = new EventEmitter<boolean>();

  onToggleChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.toggleDatosPersonales.emit(checked);
  }
}
