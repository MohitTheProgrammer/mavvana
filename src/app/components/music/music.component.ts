import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
})
export class MusicComponent {
  tracks: any = [];
  constructor() {
    const getData = async (url: string) => {
      const res = await fetch(url);
      const data = await res.json();
      for (let key in data) {
        this.tracks.push(data[key])
      }
      console.log(this.tracks)
    };
    getData(environment.FIREBASE_URL + 'music.json');
  }
}
