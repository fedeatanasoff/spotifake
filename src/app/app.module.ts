import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
