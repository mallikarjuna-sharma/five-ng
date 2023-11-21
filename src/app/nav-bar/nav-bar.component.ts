import { Component } from '@angular/core';
import { HttpApiComponent } from '../http-api/http-api.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
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
}
