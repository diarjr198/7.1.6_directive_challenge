import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directive-challenge';
  isShow = false;
  number: number[] = [];

  change(): any {
    // this.number++;
    if (this.isShow === true) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    this.number.push(this.number.length + 1);
    console.log(this.number.length);
  }
}
