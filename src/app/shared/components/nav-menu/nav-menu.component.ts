import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  menuMobStyle = 'w-[0px]';

  constructor(
    private router: Router,
    private translateService: TranslateService
    ) { }

  itensMenu: any = [
    { label: "MENU_FILMES", url: '/filmes' },
    { label: "MENU_SOBRE", url: '/sobre' },
    { label: "MENU_CONTATO", url: '/contato' }
  ]

  public changeRoute(event: any) {
    if (event) {
      this.router.navigate([`${event.url}`])
      this.closeMobMenu()
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  openMobMenu(){
    this.menuMobStyle = 'w-[300px]'
  }

  closeMobMenu(){
    this.menuMobStyle = 'w-[0px]'
  }

  instagramRedirect() {
    window.open('https://www.instagram.com/estudiocelestina', '_blank');
  }
}
