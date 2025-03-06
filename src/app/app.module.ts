import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoxContentComponent } from './components/box-content/box-content.component';
import { CardComponent } from './components/card/card.component';
import { AudioComponent } from './pages/audio/audio.component';
import { ArtistComponent } from './pages/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BoxContentComponent,
    CardComponent,
    AudioComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
