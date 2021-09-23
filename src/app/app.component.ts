import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highlight-text';
  showTruthState: boolean = false;
  public showTheTruth() {
    for (let i = 0; i < document.getElementsByClassName('dissapearing-text').length; i++) {
      if (this.showTruthState) {
        document.getElementsByClassName('dissapearing-text')[i].classList.remove('show-me');
      } else {
        document.getElementsByClassName('dissapearing-text')[i].classList.add('show-me');
      }
      
    }
    this.showTruthState = !this.showTruthState;
  }
}
