import { Component } from '@angular/core';
import { HttpApiComponent } from './http-api/http-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = '';
  seachedAlbum = 'enter album name';

  artistName = '';
  total_tracks = '';
  release_date = '';

  albumImageUrl = '';

  recentAlbums: {
    images: {
      url: string;
    }[];
    artists: {
      name: string;
    }[];
    release_date: string;
    total_tracks: string;
    name: string;
  }[] = [];

  forloopdata = [1, 2, 3, 4];
  nullCustomer = true;

  categoriesResponse: {
    icons: {
      url: string;
    }[];
  }[] = [];

  constructor(private httpService: HttpApiComponent) {}

  onSearchAlbumClick(event: Event) {
    this.httpService.getAlbum(this.seachedAlbum).subscribe(
      (response: any) => {
        console.log(response);
        this.recentAlbums = response.albums.items;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSearchAlbumChange($event: Event) {
    this.seachedAlbum = ($event?.target as HTMLInputElement).value;
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

  handleFetchCategories() {
    this.httpService.getCategories().subscribe(
      (response: any) => {
        this.categoriesResponse = response.categories.items;
        this.albumImageUrl = response.categories.items[0].icons[0].url;
        this.artistName = response.categories.items[0].name;
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
