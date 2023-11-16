import { Component } from '@angular/core';
import { HttpApiComponent } from './http-api/http-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  firstName = 'enter album name';

  artistName = '';
  total_tracks = '';
  release_date = '';

  albumImageUrl = '';

  recentAlbums = [];

  constructor(private httpService: HttpApiComponent) {}

  onClick(event: Event) {
    this.httpService.getAlbum(this.firstName).subscribe(
      (response: any) => {
        console.log(response);
        this.albumImageUrl = response.albums.items[0].images[0].url;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onChange($event: Event) {
    this.firstName = ($event?.target as HTMLInputElement).value;
  }

  handleRecentAlbum() {
    this.httpService.getNewRelease().subscribe(
      (response: any) => {
        console.log(response.albums.items, 'handleRecentAlbum');
        this.recentAlbums = response.albums.items;
        this.albumImageUrl = response.albums.items[10].images[0].url;
        this.title = response.albums.items[10].name;

        this.artistName = response.albums.items[10].artists[0].name;
        this.total_tracks = response.albums.items[10].total_tracks;
        this.release_date = response.albums.items[10].release_date;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

// decalre a variation

// at class level

// varialbeName = data type

// at methods are function level

// let/const variableName = data type

// binding ts and html for variables
// {{  }}

// binding ts and html for events/actions
// ()
