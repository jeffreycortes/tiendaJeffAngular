import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';
import {LogService} from './log.service';
const urlApi = 'http://localhost:3000/tiendaJeffBk';

@Injectable()
export class ManagerService {
  private  urlBase: string;
  private items: any[] = [];
  response: any;

  constructor(private logService: LogService, private http: HttpService) {
  }

  getNumItems(){
    return this.items.length;
  }

  getPriceFullItems(){
    let price = 0;
    for (let index in this.items){
      let item  = this.items[index];
      price = price + (item.precio * item.unidades);
    }
    return price;
  }

  getAllItems(){
    return this.items;
  }

  findItemxId(item, idFind){
    return item.id === idFind;
  }

  addItem(item){
    var IsExist = this.items.find((value, index)=>{
      return this.findItemxId(value, item.id);
    });
    if(IsExist){
      IsExist.unidades = parseInt(IsExist.unidades) + parseInt(item.unidades);
      return;
    };
    this.items.push(item);
  }

  emptyItems(){
    this.items = [];
  }

  getResponse(data, index){
    this.response = data;
  }

  buyItems(){
    for(let index in this.items){
      var item = this.items[index];
      this.updateItem(item.id, item.unidades)
      .subscribe(data=> this.getResponse(data, index));
    }
  }

  updateItem(id, unidades){
    this.urlBase = urlApi + "/Item/update";
    var data = {id: id, unidades: unidades}
    return this.http.sendData(this.urlBase, data);
  }

  login(user: string, pass: string){
    this.urlBase = urlApi + "/Login";
    var userData = {user: user, pass:pass};
    return this.http.sendData(this.urlBase, userData);
  }

  getStockItems(modeSearch:string = "", textSearch: string = ""){
    let urlChild = modeSearch + (textSearch.length > 0 ? "\/" : "") + textSearch;
    this.urlBase = urlApi + "/Items" + urlChild;
    let aux : any[] = [];
    this.http.getData(this.urlBase, {textSearch: textSearch})
    .subscribe((data: Response)=>  {
      for(let index in data){
        aux.push(data[index]);
      }
    })
    return aux;
  }
}
