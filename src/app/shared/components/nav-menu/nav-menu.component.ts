import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  itensMenu: any = [
    {label:'Filmes', url:''},
    {label:'Sobre', url:''},
    {label:'Contato', url:''}
  ]
}
