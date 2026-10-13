import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() descripcion = '';
  @Input() experiencias: any[] = [];
  @Input() formaciones: any[] = [];
  @Input() tecnologias: string[] = [];
  @Input() seccionActiva: 'sobre-mi' | 'experiencia' | 'formacion' | 'tecnologias' = 'sobre-mi';
}
