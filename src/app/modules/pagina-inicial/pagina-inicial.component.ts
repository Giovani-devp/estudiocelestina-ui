import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

  listFilmes:any[] = [
    {id:'LeComCre', label:'Lé com Cré', ano: '2018', img: './assets/images/01_Lé com Cré/LCC.png'},
    {id:'Cefalopodes', label:'Cefalópodes', ano: '2018', img: './assets/images/02_Cefalópodes/Cefalópodes.png'},
    {id:'CambioDesligo', label:'Câmbio, Desligo', ano: '2018', img: './assets/images/03_Câmbio, Desligo/CAM_01.png'},
    {id:'Servicos', label:'Serviços', ano: '2018', img: './assets/images/04_Serviços/03/BlocoServicos_FRAMES_V0226.png'},

  ]
  @ViewChild('divVideo') divVideo!: ElementRef;
  videoPath = true;

  constructor(
    private route: Router,
    public videoService: VideoService,
  ) {

  }

  ngOnInit(): void {
    this.atualizaVideo();

  }
  atualizaVideo(){
  this.videoService.videoPath$.subscribe(path => {
    if (path === 'pt') {
      this.videoPath = true
    } else if (path === 'en') {
      this.videoPath = false;
    }
  });
}
  navegate(rota: any) {
    this.route.navigate([rota]);
  }

}
