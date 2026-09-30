import { Component } from '@angular/core';
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  nombre = 'Daniel Arias García';
  edad = 23;
  direccion = 'Calle Sierra de las Nieves, 11, 29567 Málaga';
  ciudad = 'Málaga';
  telefono = '665280386';
  correoElectronico = 'darigar2101@g.educaand.es';
  github = 'daniag56';
  idiomaNativo = 'Español: Nativo';
  idiomaSecundario = 'Inglés: Basico';
}
