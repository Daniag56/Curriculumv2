import { Component } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre = 'Daniel Arias García';
  profesion = 'Tecnico de Sistemas Microinformáticos y Redes';
  profesion2 = 'Desarrollador de Aplicaciones Multiplataforma en formación';
  descripcion =
    'Me encantan las nuevas tecnologías, el desarrollo de software y el cacharreo de hardware';
  empresa1 = 'Centro Vuela';
  experiencia1 = 'Encargado de IT';
  periodo1 = '2023 - 2024';
  descripcionEmpresa1 =
    'Reparación de ordenadores, mantenimiento de redes y atención al cliente ';

  empresa2 = 'Restaurante Bartolini';
  experiencia2 = 'Repartidor de comida';
  periodo2 = '2023 - 2025';
  descripcionEmpresa2 = 'Repartidor de comida a domicilio';
  formacion1 = 'Tecnico de Sistemas Microinformáticos y Redes en Ies Serrania';
  formacion2 = 'Desarrollador de Aplicaciones Multiplataforma en Alan Touring';
  ciudad = 'Málaga';
  telefono = '665280386';
  correoElectronico = 'darigar2101@g.educaand.es';
  github = 'daniag56';
  idiomaNativo = 'Español: Nativo';
  idiomaSecundario = 'Inglés: Basico';
  edad = 23;
  direccion = 'Calle Sierra de las Nieves, 11, 29567 Málaga';

  fecha = new Date();

  textoPie = 'Currículum desarrollado con Angular';

  tecnologias = [
    'Java',
    'HTML',
    'CSS',
    'SpringBoot',
    'TypeScript',
    'Angular',
    'SQL',
  ];
}
