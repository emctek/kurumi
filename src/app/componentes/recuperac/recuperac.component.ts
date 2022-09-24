import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperac',
  templateUrl: './recuperac.component.html',
  styleUrls: ['./recuperac.component.scss'],
})
export class RecuperacComponent implements OnInit {
  constructor(private route: Router) {}

  iniciar() {
    this.route.navigate(['/sesion']);
  }

  ngOnInit() {}
}
