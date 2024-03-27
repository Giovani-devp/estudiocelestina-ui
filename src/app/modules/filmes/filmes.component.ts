import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  listFilmes: any[] = [
    { id: 'LeComCre', label: 'Lé com Cré', ano: '2018', img: './assets/images/01_Lé com Cré/LCC.png' },
    { id: 'LeComCre', label: 'Cefalópodes', ano: '2018', img: './assets/images/02_Cefalópodes/Cefalópodes.png' },
    { id: 'LeComCre', label: 'Câmbio, Desligo', ano: '2018', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png' },
    { id: 'LeComCre', label: 'Cefalópodes', ano: '2018', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png' },

  ]

  navegate(rota: any) {
    this.route.navigate([rota]);
  }

}
