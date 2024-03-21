import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  constructor(private router: Router) { }

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
}
