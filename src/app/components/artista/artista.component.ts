import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista_ID: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(parametro => {
      console.log(parametro['id']);
      this.artista_ID = parametro['id'];
    });
  }

  ngOnInit() {}
}
