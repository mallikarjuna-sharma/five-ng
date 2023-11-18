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
    'BQDOB-T-sLyjlmgOy09t3WVfBYuWGrc8zp6krsOnRHjva7Zp4d6oZVAnBmWiXAq6bJJVVY9HS61__KKok8ZW2flDM17Kc4kIgahUVcm9fA3XmiTtqaw7MmCDb5Pamydrro7nNerFoYqYGbRQrN5U2fHLv_952X0xqAbwyhfHLyvZ1OGmZfCuaeNvZayFQRrIgEqYko81mpFrAbPDoEeD8I14eh5HqKEaXRyl5cT-vW7UxZ3ynAy5SEL3A2nnwRKF1jWiCf9rxAspOC0UJLJ7wX61qA9N965eXUyfpaq5OaSyYPLBL0LMlHwdZ83P4mWqww';

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
}
