import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  visibleOrHidden = '!hidden'
  ngOnInit(): void {
    setTimeout(() => {
      this.visibleOrHidden = '!visible'
    }, 10000);
  }
}
