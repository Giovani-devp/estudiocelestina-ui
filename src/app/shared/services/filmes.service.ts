import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  listFilms:any[] = [
    {
      id:'LeComCre',
      images_1:[
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01461.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01463.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01465.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01467.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01469.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01471.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01473.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01475.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01477.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01479.png'},
        {url:'./assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01485.png'}
      ],
      images_2:[
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01384.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01386.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01388.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01390.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01392.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01394.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01396.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01398.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01402.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01404.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01406.png'},
        {url:'./assets/images/01_Lé com Cré/02_LCC_crop/LCC_FINAL_01408.png'}
      ],
      images_3:[
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04414.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04416.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04418.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04420.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04422.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04424.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04425.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04427.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04428.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04430.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04431.png'},
        {url:'./assets/images/01_Lé com Cré/03_LCC_crop/LCC_FINAL_04433.png'}
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
