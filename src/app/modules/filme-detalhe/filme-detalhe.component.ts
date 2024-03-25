import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.scss']
})
export class FilmeDetalheComponent {

filme:any
constructor(
  private activatedRoute:ActivatedRoute,
  private filmesService: FilmesService
  ){

}

ngOnInit(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log(id);
  this.filme = this.filmesService.listFilms.find(filme => filme.id === id);
  console.log(this.filme);

}
}
