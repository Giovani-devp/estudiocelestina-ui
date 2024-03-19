import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FilmesComponent } from './modules/filmes/filmes.component';
import { ContatoComponent } from './modules/contato/contato.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    FilmesComponent,
    ContatoComponent,
    SobreComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
