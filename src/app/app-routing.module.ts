import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './modules/filmes/filmes.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { SobreComponent } from './modules/sobre/sobre.component';
import { ContatoComponent } from './modules/contato/contato.component';

const routes: Routes = [
  { path: '', component: FilmesComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
