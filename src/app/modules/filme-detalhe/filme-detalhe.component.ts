import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.scss']
})
export class FilmeDetalheComponent {

content = 'equipe'
filme:any
currentIndex = 0;

constructor(
  private activatedRoute:ActivatedRoute,
  private filmesService: FilmesService
  ){

}

ngOnInit(){
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.filme = this.filmesService.listFilms.find(filme => filme.id === id);
}

@HostListener('window:scroll', ['$event'])
onScroll(event: any): void {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  const newIndex = Math.floor(scrollPosition / (window.innerHeight / 11));

  if (newIndex !== this.currentIndex && newIndex >= 0 && newIndex < this.filme.images_1.length) {
    this.currentIndex = newIndex;
  }
}
}
