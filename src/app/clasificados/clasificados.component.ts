import { Component, OnInit } from '@angular/core';
import {bootstrap, jquery} from 'jquery';
declare var $:jquery;

@Component({
  selector: 'app-clasificados',
  templateUrl: './clasificados.component.html',
  styleUrls: ['./clasificados.component.css']
})

export class ClasificadosComponent implements OnInit {

  constructor() { }

  public sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public OnAnimate(){
    var $item = $(".indicator-item.active").next();
    if($item.length > 0){
      $item.click();
    }
    else{
      $(".indicator-item:first").click();
    }
}
  ngAfterViewInit(): void {
    setInterval(this.OnAnimate, 5000);
  }

  ngOnInit() {

  }

}
