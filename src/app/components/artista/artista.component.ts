import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista_ID: string;
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private spotifake: SpotifakeService
  ) {
    this.activateRoute.params.subscribe(parametro => {
      this.loading = true;
      console.log(parametro['id']);
      this.artista_ID = parametro['id'];
      this.obtenerArtista(parametro['id']);
      this.obtenerTopTracks(parametro['id']);
    });
  }

  obtenerArtista(id: string) {
    this.spotifake.getArtista(id).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.artista = data;
    });
  }

  obtenerTopTracks(id: string) {
    this.spotifake.getTopTracks(id).subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }

  ngOnInit() {}
}
