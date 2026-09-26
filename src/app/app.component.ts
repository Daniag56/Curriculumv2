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
  profesion2 = "Desarrollador de Aplicaciones Multiplataforma en formación";
  descripcion =
    'Apasionado de las nuevas tecnologías, el desarrollo de software y el cacharreo de hardware';

  ciudad = 'Málaga';
  telefono = '665280386';
  correoElectronico = 'darigar2101@g.educaand.es';
  github = 'daniag56';
  idiomaNativo = 'Español: Nativo';
  idiomaSecundario = 'Inglés: Basico';
  edad = 23;
  direccion = 'Calle Principal, 123';

  fecha = new Date();

  textoFooter = 'Currículum desarrollado con Angular';

  tecnologias = [
    'Java',
    'HTML',
    'CSS',
    'SpringBoot',
    'TypeScript',
    'Angular',
    'SQL',
  ];

  experiencia1Empresa = 'Centro Vuela';
  experiencia1Puesto = 'Encargado de IT';
  experiencia1Periodo = '2023 - 2024';
  experiencia1Descripcion =
    'Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías modernas.';

  experiencia2Empresa = 'Proyectos Académicos';
  experiencia2Puesto = 'Desarrollador Full Stack';
  experiencia2Periodo = '2022 - 2024';
  experiencia2Descripcion =
    'Creación de aplicaciones web y bases de datos durante la formación profesional.';

  formacion = 'Tecnico de Sistemas Microinformáticos y Redes';
}
