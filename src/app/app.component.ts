import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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
<div *ngIf="isLoading">Getting data...</div>
<div *ngFor="let item of artists.items" class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object-img" src="{{item.images[0]?.url}}" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Media heading</h4>
    
  </div>
</div>
`,
providers: [SpotifyService]
})
export class AppComponent {
  isLoading = true;
  artists = [];
  constructor(private _spotifyService:SpotifyService){
  }
  ngOnInit(){
    this._spotifyService.getSpotifyData()
    .subscribe( data => {this.isLoading = false; this.artists = data.artists; console.log(this.artists); });
  }
}
