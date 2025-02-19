import { Component } from '@angular/core';
import { artistArray } from '../database/artists';
import { songsArray } from '../database/songs';

@Component({
  selector: 'app-box-content',
  standalone: false,
  templateUrl: './box-content.component.html',
  styleUrl: './box-content.component.css'
})
export class BoxContentComponent {
  artistArray = artistArray;
  songsArray = songsArray;
}
