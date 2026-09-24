import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe} from '@angular/common';
 
@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, DatePipe],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Mi curriculum';
    nombre = 'Nombre: Daniel Arias';
    fecha = new Date();
    ciudad = "Ciudad: Málaga";
    telefono = "Telefono: 6574732";
    correo_electronico = "Correo electrónico: darigar2101@g.educaand.es";
    sitio_web = "LinkedIn: linkedin.com/in/daniel-arias-2b0a1b1a3";
    Github = "Github: daniag56";
    idiomas = "Idiomas: Español, Inglés";
}