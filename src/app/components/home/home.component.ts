import { Component, OnInit } from '@angular/core';
import { SpotifakeService } from '../../services/spotifake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  constructor(private spotifake: SpotifakeService) {
    this.spotifake.getNewReleases().subscribe((info: any) => {
      console.log(info);
      this.newReleases = info;
    });
  }

  ngOnInit() {}
}
