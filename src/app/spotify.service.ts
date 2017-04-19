import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()
export class SpotifyService{
    constructor(private _http:Http){}

    getSpotifyData(value){
        return this._http.get("https://api.spotify.com/v1/search?q=" + value +"&type=artist").map(res => res.json());
    }
}