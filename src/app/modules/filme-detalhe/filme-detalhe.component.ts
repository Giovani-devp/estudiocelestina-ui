import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.scss']
})
export class FilmeDetalheComponent {

  content = 'equipe'
  content1 =' Equipe: \nDireção, Direção de Arte e Animação: Cassandra Reis '
  filme: any
  currentIndex = 0;
  preloadIndex = 1;
  scrolling = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmesService: FilmesService,
    private translateService: TranslateService
  ) {

  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filme = this.filmesService.listFilms.find(filme => filme.id === id);
    this.preloadNextImages();
    this.scrollToTop();
  }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any): void {
      if (!this.scrolling) {
        this.scrolling = true;
        setTimeout(() => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
          const newIndex = Math.floor(scrollPosition / (window.innerHeight / 11));

          if (newIndex !== this.currentIndex && newIndex >= 0 && newIndex < this.filme.images_1.length) {
            this.currentIndex = newIndex;
            this.preloadNextImages();
          }
          this.scrolling = false;
        }, 50);
      }
    }

  preloadNextImages() {
    for (let i = 1; i <= this.preloadIndex; i++) {
      const nextIndex = this.currentIndex + i;
      if (nextIndex < this.filme.images_1.length) {
        const img1 = new Image();
        img1.src = this.filme.images_1[nextIndex].url;

        const img2 = new Image();
        img2.src = this.filme.images_2[nextIndex].url;

        const img3 = new Image();
        img3.src = this.filme.images_3[nextIndex].url;
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
