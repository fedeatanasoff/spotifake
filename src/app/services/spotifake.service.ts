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
    // const client_id = '5845798fd4cd4c9887ba4e538d09ea3b';
    // const secret_id = 'f27a68cd335a4aeb89e2dcfd74311c60';

    // let token: any;

    // const promesa = new Promise((resolve, reject) => {
    //   this.http
    //     .get(
    //       `http://spotify-get-token.herokuapp.com/spotify/${client_id}/${secret_id}`
    //     )
    //     .subscribe((data: any) => {
    //       resolve(data.access_token);
    //     });
    // });

    // promesa.then(data => {
    //   console.log('then: ', data);
    //   token = data;
    // });

    // console.log('token: ', token);

    const headers = new HttpHeaders({
      Authorization: `Bearer BQAczK6brXBwJei9w8u3B8JlCeRKLHKTsbW0uRmg1WbpuARfI7-H_lhV6IM5nSQkzjrTq2oyDI8VzEu_qvg`
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  private getToken() {
    const client_id = '5845798fd4cd4c9887ba4e538d09ea3b';
    const secret_id = 'f27a68cd335a4aeb89e2dcfd74311c60';

    let tokenServer: string;

    return new Promise((resolve, reject) => {
      this.http
        .get(
          `http://spotify-get-token.herokuapp.com/spotify/${client_id}/${secret_id}`
        )
        .subscribe((data: any) => {
          tokenServer = data;
          console.log(data);
          resolve();
        });
    });

    // return this.http
    //   .get(
    //     `http://spotify-get-token.herokuapp.com/spotify/${client_id}/${secret_id}`
    //   )

    //   .pipe(map(data => data['access_token']));
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
