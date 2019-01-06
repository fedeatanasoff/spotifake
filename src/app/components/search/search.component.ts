import { Component, OnInit } from '@angular/core';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistaBuscado: any[] = [];
  loading: boolean;

  constructor(private spotifake: SpotifakeService) {}

  ngOnInit() {}

  buscarArtista(artista: string) {
    this.loading = true;

    if (artista === '') {
      this.loading = false;
    }

    this.spotifake.getArtistas(artista).subscribe(info => {
      console.log(info);
      this.artistaBuscado = info;
      this.loading = false;
    });
    // }
  }
}
