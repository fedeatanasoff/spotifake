import { Component, OnInit } from '@angular/core';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotifake: SpotifakeService) {
    this.loading = true;

    this.spotifake.getNewReleases().subscribe((info: any) => {
      console.log(info);
      this.newReleases = info;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
