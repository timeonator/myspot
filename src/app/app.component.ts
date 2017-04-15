import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SpotifyService } from './spotify.service';


@Component({selector: 'app-root',
template: ``,
providers: [SpotifyService]
})
export class AppComponent {
  constructor(private _spotifyService:SpotifyService){
    this._spotifyService.getSpotifyData().subscribe(data => console.log(data));
  }
}
