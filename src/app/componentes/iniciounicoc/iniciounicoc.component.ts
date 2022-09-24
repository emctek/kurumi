import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciounicoc',
  templateUrl: './iniciounicoc.component.html',
  styleUrls: ['./iniciounicoc.component.scss'],
})
export class IniciounicocComponent implements OnInit {

  constructor(private route: Router) {}

  iniciar() {
    this.route.navigate(['/inicio']);
  }

  sesion() {
    this.route.navigate(['/sesion']);
  }

  recupera() {
    this.route.navigate(['/recupera']);
  }

  ngOnInit() {}

}
