import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit, AfterViewInit{

  listFilmes:any[] = [
    {id:'LeComCre', label:'Lé com Cré', ano: '2018', img: './assets/images/01_Lé com Cré/LCC.png'},
    {id:'Cefalopodes', label:'Cefalópodes', ano: '2018', img: './assets/images/02_Cefalópodes/Cefalópodes.png'},
    {id:'CambioDesligo', label:'Câmbio, Desligo', ano: '2018', img: './assets/images/03_Câmbio, Desligo/CAM_01.png'},
    {id:'Servicos', label:'Serviços', ano: '2018', img: './assets/images/04_Serviços/03/BlocoServicos_FRAMES_V0226.png'},

  ]
  @ViewChild('divVideo') divVideo!: ElementRef;

  constructor(
    private route: Router
  ){

  }

  ngOnInit(): void {
    if (this.divVideo) {
      this.divVideo.nativeElement.addEventListener('click', this.playVideo.bind(this));
    }
  }

  ngAfterViewInit(): void {
    this.playVideo();
    this.divVideo.nativeElement.addEventListener('click', this.playVideo.bind(this));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
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

  navegate(rota:any){
    this.route.navigate([rota]);
  }


}
