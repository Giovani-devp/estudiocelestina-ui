import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent {

  listFilmes:any[] = [
    {label:'Lé com Cré', ano: '2018', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png'},
    {label:'Cefalópodes', ano: '2018', img: './assets/images/02_Cefalópodes/CEF_03_crop/CEF_AnimaticV3_17710.png'},
    {label:'Câmbio, Desligo', ano: '2018', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png'},
    {label:'Cefalópodes', ano: '2018', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png'},

  ]

  ngOnInit(): void {
    this.playVideo();
  }

  playVideo(): void {
    const video = document.getElementById('video') as HTMLVideoElement;
    if (video) {
      video.play().catch(error => {
        console.error(error);
      });
    }
  }
}
