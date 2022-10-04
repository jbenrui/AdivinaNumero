import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomNumber:number= Number((Math.random() * (100 - 0) + 0).toFixed(0));
  estado_:number = 2;
  num:number=0;

  constructor() {}

  tryIt(num: number){
    
    if(this.randomNumber > num){
      console.log(num);
      console.log(this.randomNumber)
      return this.estado_= 1;
    }else if (this.randomNumber < num ){
      console.log(num);
      console.log(this.randomNumber)
      return this.estado_=-1;
    }

    if(num == this.randomNumber){
      return this.estado_=0;
    }
  }

  restartIt(){
    location.reload();
  }
}
