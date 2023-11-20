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
    'BQCRRbpE-Og4W0i0yOBHNvw4IiRYL6tbZigzQiUG1EQgupJaomUHDtSz7MGfD6py2ri0Rb28km49A6_cNvQTW43lOAJvP96B5imkCGmU6cDaqp52hq8Yef2Hid6cCJL5s1RdCJOhnybPSp56g8magWrCGctCY3fGX_Yqr1ChSNa8kwvMm6JK7YRinnzcu_DCzKnawGK2qENi6npxF4skWqhV75WnSVC7xYh-LnokKgGEobCP74raS8T7q-mTMPownwf5KX4vWxiPboLpcbReul6GQCosu6Qas69HkaxtxAkePZAYRW2SED4iQFSp7iInrQ';

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
    return this.http.get(
      this.url + '/me/tracks?limit=20&offset=0&market=IN',
      {
        headers: {
          Authorization: 'Bearer ' + this.token,
        },
      }
    );
  }
}
