import { Component } from '@angular/core';
import getRandomNum from 'utils/getRandomNum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  first_num: number = getRandomNum(50);
  second_num: number = getRandomNum(50);
  result: string = '';

  isCorrect = false;
  isWrong = false;

  initateNumbers() {
    this.first_num = getRandomNum(50);
    this.second_num = getRandomNum(50);
  }

  hideFeedback() {
    this.isCorrect = false;
    this.isWrong = false;
  }

  checkResult() {
    if (parseInt(this.result) === this.first_num + this.second_num) {
      this.isWrong = false;
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
      this.isWrong = true;
    }
    this.result = '';
    this.initateNumbers();
  }
}
