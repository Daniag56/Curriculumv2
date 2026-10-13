import { Component } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgOptimizedImage, HeaderComponent, FooterComponent, MainlayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre = 'Daniel Arias García';
  profesion = 'Tecnico de Sistemas Microinformáticos y Redes';
  profesion2 = 'Desarrollador de Aplicaciones Multiplataforma en formación';
  descripcion = 'Me encantan las nuevas tecnologías, el desarrollo de software y el cacharreo de hardware';
  edad = 23;
  direccion = 'Calle Sierra de las Nieves, 11, 29567 Málaga';
  ciudad = 'Málaga';
  telefono = '665280386';
  correoElectronico = 'darigar2101@g.educaand.es';
  github = 'daniag56';
  idiomaNativo = 'Español: Nativo';
  idiomaSecundario = 'Inglés: Basico';

  fecha = new Date();
  textoPie = 'Currículum desarrollado con Angular';

  seccionActiva: 'sobre-mi' | 'experiencia' | 'formacion' | 'tecnologias' = 'sobre-mi';
  mostrarDatosPersonales = true;

  experiencias = [
    { empresa: 'Centro Vuela', puesto: 'Encargado de IT', periodo: '2023 - 2024', descripcion: 'Reparación de ordenadores, mantenimiento de redes y atención al cliente' },
    { empresa: 'Restaurante Bartolini', puesto: 'Repartidor de comida', periodo: '2023 - 2025', descripcion: 'Repartidor de comida a domicilio' }
  ];

  formaciones = [
    { titulo: 'Tecnico de Sistemas Microinformáticos y Redes', centro: 'Ies Serrania' },
    { titulo: 'Desarrollador de Aplicaciones Multiplataforma', centro: 'Alan Touring' }
  ];

  tecnologias = ['Java', 'HTML', 'CSS', 'SpringBoot', 'TypeScript', 'Angular', 'SQL'];

  onSeccionChange(seccion: 'sobre-mi' | 'experiencia' | 'formacion' | 'tecnologias') {
    this.seccionActiva = seccion;
  }

  onToggleDatosPersonales(mostrar: boolean) {
    this.mostrarDatosPersonales = mostrar;
  }
}
