import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   backgroundColor = 'bg-amarelo';

  constructor() { }

  ngOnInit(): void {
    interval(2000).subscribe(() => {
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
