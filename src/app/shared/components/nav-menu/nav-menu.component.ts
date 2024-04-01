import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  menuMobStyle = 'w-[0px]';

  constructor(
    private router: Router,
    ) { }

  itensMenu: any = [
    { label: 'Filmes', url: '/filmes' },
    { label: 'Sobre', url: '/sobre' },
    { label: 'Contato', url: '/contato' }
  ]

  public changeRoute(event: any) {
    if (event) {
      this.router.navigate([`${event.url}`])
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  changeLanguage(lang: string) {
    //this.translateService.use(lang);
  }

  openMobMenu(){
    this.menuMobStyle = 'w-[300px]'
  }

  closeMobMenu(){
    this.menuMobStyle = 'w-[0px]'
  }
}
