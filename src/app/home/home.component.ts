import { Component, OnInit } from '@angular/core';
import {bootstrap, jquery} from 'jquery';
import {ManagerService} from '../manager.service';
declare var $:jquery;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ManagerService]
})
export class HomeComponent implements OnInit {

  constructor(private managerService:ManagerService) { }

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
