import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { songsArray } from '../../components/database/songs';
import { Song } from '../../components/database/song.model';

@Component({
  selector: 'app-audio',
  standalone: false,
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  music: any;  // Armazena a música selecionada

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o ID da URL e encontra a música correspondente
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Obtém o ID da URL e converte para número
      this.music = songsArray.find((song: Song) => song.id === id); // Busca a música pelo ID
    });
  }
}
