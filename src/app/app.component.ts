import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Simple Calculator';
num1:number;
num2:number;
res:number;
  add(){
    this.res=+this.num1+ +this.num2;
  }
  sub(){
    this.res=this.num1-this.num2;
  }
  mul(){
    this.res=+this.num1*this.num2;
  }
  divide(){
    this.res=this.num1/this.num2;
  }
  
}
