import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  listFilms:any[] = [
    {
      id:'LeComCre',
      images:[
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png'}
      ],
      title:'LCC_TITLE',
      sub:'LCC_SUBTITLE',
      autor:'LCC_AUTOR',
      texto_1:'LCC_TEXTO_1',
      texto_2:'LCC_TEXTO_2',
      equipe:'LCC_EQUIPE'
    }
  ];
  constructor() { }
}
