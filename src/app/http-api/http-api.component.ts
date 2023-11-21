import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class HttpApiComponent {
  constructor(private http: HttpClient) {}

  token =
    'BQAuAt7CI5IcK0zaubeimnC024JWtdg5Rtc2SC-q-7r9XgW4snKQ8zdBmOz3jp94ShRZf7Us5Y5u08ZP9bkgR_RJsaddr5XrcGAGmZeVrnqrkOXZ4J4rsOZaDBoAQh5xc0O1-geo5uI0D-fd4hfawMP32aJcUrtTIKBmXxa8lQfm2njvEd2jzdobahtpFtDYvngQfvc8521zCoMB7Z1CQU9D1_C6N939B75ozkWgn70kW36eyEeFZJZGfmul1AZxIcAPDvbLpucNXFG99OKT9XYyoXB1vjqBFdIKhHXW-SihSc7ki77M6tNcmBAqncKKzw';

  url = 'https://any-api.com:8443/https://api.spotify.com/v1/';

  getAlbum(movieName: string) {
    return this.http.get(
      this.url + `search?limit=5&offset=0&q=${movieName}&type=album`,
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }

  getNewRelease() {
    return this.http.get(
      this.url + `browse/new-releases?limit=20&offset=0&country=IN&accept=mp3`,
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }

  getCategories() {
    return this.http.get(
      this.url + 'browse/categories?limit=20&offset=0&country=IN',
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }

  getPlaylists() {
    return this.http.get(
      this.url + 'browse/featured-playlists?limit=20&offset=0&country=IN',
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
  getMyTracks() {
    return this.http.get(this.url + '/me/tracks?limit=20&offset=0&market=IN', {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }

  getMe() {
    return this.http.get(this.url + '/me', {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}
