import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class SpotifakeService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer BQC6DNFoWZHjKmy5JsSdWeb0JjBoI2EVo86VaqFcNkd-4QNDXciem9tR0J9APdDw5s3MlWrYh1LqzCiDT7c`
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  private getToken() {
    const client_id = '5845798fd4cd4c9887ba4e538d09ea3b';
    const secret_id = 'f27a68cd335a4aeb89e2dcfd74311c60';

    return this.http.get(
      `http://spotify-get-token.herokuapp.com/spotify/${client_id}/${secret_id}`
    );

    //        `http://spotify-get-token.herokuapp.com/spotify/${client_id}/${secret_id}`
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=AR&limit=20').pipe(
      map(data => data['albums'].items)
    );
  }

  getArtistas(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=12`).pipe(
      map(data => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ar`).pipe(
      map(data => data['tracks'])
    );
  }
}
