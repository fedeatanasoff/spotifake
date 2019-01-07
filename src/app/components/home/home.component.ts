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

  errorMessage: any = {};
  error: boolean;

  constructor(private spotifake: SpotifakeService) {
    this.loading = true;
    this.error = false;

    this.spotifake.getNewReleases().subscribe(
      (info: any) => {
        console.log(info);
        this.newReleases = info;
        this.loading = false;
      },
      errorHome => {
        console.log(errorHome);
        this.loading = false;
        this.error = true;
        this.errorMessage = errorHome;
      }
    );
  }

  ngOnInit() {}
}
