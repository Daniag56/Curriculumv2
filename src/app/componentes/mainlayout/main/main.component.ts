import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  empresa1 = 'Centro Vuela';
  experiencia1 = 'Encargado de IT';
  periodo1 = '2023 - 2024';
  descripcionEmpresa1 =
    'Reparación de ordenadores, mantenimiento de redes y atención al cliente ';
  descripcion =
    'Me encantan las nuevas tecnologías, el desarrollo de software y el cacharreo de hardware';

  empresa2 = 'Restaurante Bartolini';
  experiencia2 = 'Repartidor de comida';
  periodo2 = '2023 - 2025';
  descripcionEmpresa2 = 'Repartidor de comida a domicilio';
  formacion1 = 'Tecnico de Sistemas Microinformáticos y Redes en Ies Serrania';
  formacion2 = 'Desarrollador de Aplicaciones Multiplataforma en Alan Touring';
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
