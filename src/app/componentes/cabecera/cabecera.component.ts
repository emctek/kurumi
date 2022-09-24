import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  constructor(private route: Router) {}

  iniciar() {
    this.route.navigate(['/inicio']);
  }


  cursos() {
    this.route.navigate(['/cursos']);
  }


  grupos() {
    this.route.navigate(['/grupos']);
  }


  recursos() {
    this.route.navigate(['/recursos']);
  }


  calificaciones() {
    this.route.navigate(['/calificaciones']);
  }

  ngOnInit() {}

}
