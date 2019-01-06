import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit() {}

  verArtista(item: any) {
    let artista_id: string;

    if (item.type === 'artist') {
      artista_id = item.id;
    } else {
      artista_id = item.artists[0].id;
    }

    this.router.navigate(['/artist', artista_id]);
  }
}
