import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  first_num: number = this.getRandomNum(50);
  second_num: number = this.getRandomNum(50);

  result: any;

  sayWorld() {
    alert('World!');
  }

  getRandomNum(max: number) {
    return Math.floor(Math.random() * max);
  }

  checkResult() {
    if (parseInt(this.result) === this.first_num + this.second_num) {
      alert('Pravilno!');
    }
  }
}
