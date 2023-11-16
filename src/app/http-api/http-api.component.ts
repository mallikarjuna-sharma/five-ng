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
    'BQBcDqjrnYmEQ_yyS63eKw3ckeqyMEL6_o9uDLwkJ1BnDNAAWcUYFHOaCGy_YSm2oH9qoZGxZ4p9ctA_gQBooeFM7xrQE43P4a2swZdIDvORJHEqUCvKUu2H_OOjhVfUMMQofVpRQW4bTk8vJM5koewztefk-6WAVJJ8dGeTqX_yMAqFGMGI-Llww6Y8WRcSTgzYaZEpfvxKoSRXkBoTAoyLy-hOnc88Pvtg07DsMvCP0jJeJiqRxKhgfp2grlc3pCgeiFV41XntC5-O-3FzOoEAt7yjIRXqjElpTP-0vq9RbpZLnkDSTPl2zuYD9yr0ug';

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
    return this.http.get(this.url + `browse/new-releases?limit=20&offset=0&country=IN&accept=mp3`, {
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}
