import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SpotifyService } from './spotify.service';


@Component({
selector: 'app-root',
styles:[`
  .img {
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    background-position:50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  `],
template: `
<input class="form-control" type="search" [formControl]="searchControl"/>
<div *ngIf="isLoading">Getting data...</div>
<div *ngFor="let item of artists.items" class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object-img img" src="{{item.images[0]?.url}}" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{item.name}}</h4>
    <p> popularity: {{item.popularity}} </p>
    <p> followers: {{item.followers.total}} </p>
    <p> genre: <span *ngFor="let genre of item.genres" > {{genre}} </span></p>
    
  </div>
</div>
`,
providers: [SpotifyService]
})
export class AppComponent {
  searchControl = new FormControl();
  isLoading = true;
  artists = [];
  constructor(private _spotifyService:SpotifyService){
  }
  ngOnInit(){
    this.searchControl.valueChanges
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(value => {
          this.isLoading = true;
          this._spotifyService.getSpotifyData(value)
            .subscribe( data => {
              this.isLoading = false;
              this.artists = data.artists; 
              console.log(this.artists);
            });
        })
  }
}

