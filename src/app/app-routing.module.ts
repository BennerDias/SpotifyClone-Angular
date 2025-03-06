import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './pages/audio/audio.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'audio', component: HomeComponent},
  {path: 'artist', component: HomeComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'audio/:id', component: AudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
