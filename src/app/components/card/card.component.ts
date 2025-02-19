import { Component, Input } from '@angular/core';
import { artistArray } from '../database/artists';
import { songsArray } from '../database/songs';


@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data: any[] = [];
  @Input() title: string = '';

}
