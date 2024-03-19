import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  backgroundColor = 'bg-amarelo';

  constructor() { }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.alternarCor();
    });
  }

  alternarCor() {
    const cores = ['bg-amarelo', 'bg-rosa', 'bg-laranja', 'bg-azul','bg-cinza', 'bg-azulsky',];
    const corIndex = cores.indexOf(this.backgroundColor);
    const proximaCorIndex = (corIndex + 1) % cores.length;
    this.backgroundColor = cores[proximaCorIndex];
  }
}
