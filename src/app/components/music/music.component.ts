import { Component, OnInit } from '@angular/core';
import { environment } from '../../environment/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
})
export class MusicComponent implements OnInit {
  tracks: any = [];
  ngOnInit(): void {}
  constructor() {
    const getData = async (url: string) => {
      const res = await fetch(url);
      const data = await res.json();
      for (let key in data) {
        this.tracks.push(data[key]);
      }
      console.log(this.tracks);
    };
    getData(environment.FIREBASE_URL + 'music.json');
  }
}
