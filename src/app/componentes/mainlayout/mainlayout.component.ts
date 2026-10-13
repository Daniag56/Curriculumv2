import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [AsideComponent, MainComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css',
})
export class MainlayoutComponent {
  @Input() descripcion = '';
  @Input() experiencias: any[] = [];
  @Input() formaciones: any[] = [];
  @Input() tecnologias: string[] = [];
  @Input() seccionActiva:
    | 'sobre-mi'
    | 'experiencia'
    | 'formacion'
    | 'tecnologias' = 'sobre-mi';
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
}
