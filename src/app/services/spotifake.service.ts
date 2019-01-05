import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifakeService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC2LJqT9n42863-pEmmaHiRrqP_bSLDzQKE1Q_EwU29iN1p90-TxqrRhR40NwNM04tYqoQZX0rx4fm3y5Q'
    });

    return this.http.get(
      'https://api.spotify.com/v1/browse/new-releases?country=AR&limit=20',
      {
        headers
      }
    );
  }
}
