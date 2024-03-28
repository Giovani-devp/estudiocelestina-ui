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
    { id: 'LeComCre', label: '../../../assets/images/Nomes_blocos/LCC_nome.png', img: './assets/images/01_Lé com Cré/LCC.png' },
    { id: 'Cefalopodes', label: '../../../assets/images/Nomes_blocos/CEL_nome.png', img: './assets/images/02_Cefalópodes/Cefalópodes.png' },
    { id: 'CambioDesligo', label: '../../../assets/images/Nomes_blocos/CD_nome.png', img: './assets/images/01_Lé com Cré/01_LCC_crop/LCC_FINAL_01459.png' },
    { id: 'Servicos', label: '../../../assets/images/Nomes_blocos/SERVIÇOS_nome.png', img: './assets/images/BlocoServicos_FRAMES_V0212.png' },
  ]

  navigate(rota: any) {
    this.route.navigate([rota]);
  }

}
