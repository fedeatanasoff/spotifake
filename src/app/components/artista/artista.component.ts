import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  error: boolean;
  errorMessage: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private spotifake: SpotifakeService
  ) {
    this.error = false;
    this.activateRoute.params.subscribe(parametro => {
      this.loading = true;
      console.log(parametro['id']);
      this.obtenerArtista(parametro['id']);
      this.obtenerTopTracks(parametro['id']);
    });
  }

  obtenerArtista(id: string) {
    this.artista = {};
    this.spotifake.getArtista(id).subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.artista = data;
      },
      errorArtista => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorArtista;
        console.log(errorArtista);
      }
    );
  }

  obtenerTopTracks(id: string) {
    this.topTracks = [];
    this.spotifake.getTopTracks(id).subscribe(
      data => {
        console.log(data);
        this.topTracks = data;
      },
      errorTracks => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorTracks;
        console.log(errorTracks);
      }
    );
  }

  ngOnInit() {}
}
