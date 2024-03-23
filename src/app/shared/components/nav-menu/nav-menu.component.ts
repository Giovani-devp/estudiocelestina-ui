import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  constructor(
    private router: Router,
    private translateService: TranslateService
    ) { }

  itensMenu: any = [
    { label: 'Filmes', url: '/' },
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
    this.translateService.use(lang);
  }
}
