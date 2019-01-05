import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifakeService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAltjb1BuLsqlaAxmyNSYxKhBHwMnPLVRqaT3g6IWWyWrHObkX7PK2j1ssEEOSzmTRnlLyYoQZz8PijvPfLOJHsrGmflYjxiqm_OW5NM2zom-fMiIIpeRlyTXkDhpc3atUS5iixCTkRNmjVIkLgRfBQ6VSE9m_6Hg'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=AR&limit=20').pipe(
      map(data => data['albums'].items)
    );
  }

  getArtista(artista: string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=12`).pipe(
      map(data => data['artists'].items)
    );
  }
}
