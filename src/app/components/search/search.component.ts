import { Component, OnInit } from '@angular/core';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistaBuscado: any[] = [];
  constructor(private spotifake: SpotifakeService) {}

  ngOnInit() {}

  buscarArtista(artista: string) {
    console.log(artista);

    if (artista != '') {
      this.spotifake.getArtista(artista).subscribe(info => {
        console.log(info);
        this.artistaBuscado = info;
      });
    }
  }
}
