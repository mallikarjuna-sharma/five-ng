import { Component } from '@angular/core';
import { HttpApiComponent } from './http-api/http-api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';

  artistName = '';
  total_tracks = '';
  release_date = '';
  albumImageUrl = '';

  seachedAlbum = 'enter album name';
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
  categoriesResponse: {
    icons: {
      url: string;
    }[];
  }[] = [];

  playlistResponse: any = [];
  myTracks: any = [];

  myObject: any = {};

  constructor(private httpService: HttpApiComponent) {}

  ngOnInit() {
    this.httpService.getMe().subscribe(
      (response: any) => {
        console.log(response);
        this.myObject.birthdate = response.birthdate;
        this.myObject.display_name = response.display_name;
        this.myObject.email = response.email;

        this.myObject.followers = response.followers.total;
        this.myObject.url = response.images[0].url;
        this.myObject.product = response.product;
      },
      (error) => {
        console.log(error);
      }
    );
  }

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

  handlePlaylist() {
    this.httpService.getPlaylists().subscribe(
      (response: any) => {
        console.log(response.playlists.items);
        this.playlistResponse = response.playlists.items;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleMyTracks() {
    this.httpService.getMyTracks().subscribe(
      (response: any) => {
        this.myTracks = response.items;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handlePlayNow(item: any) {
    if (item?.external_urls?.spotify) {
      window.location.href = item.external_urls.spotify;
    }
    if (item?.track?.external_urls?.spotify) {
      window.location.href = item.track.external_urls.spotify;
    }
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
