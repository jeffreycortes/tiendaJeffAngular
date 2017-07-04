import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ManagerService} from '../manager.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: string = '';
  pass: string = '';
  submit: boolean = false;

  constructor(
    private managerService: ManagerService
    ,private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm){
    this.user = form.value.userLogin;
    this.pass = form.value.userPass;
    if(!form.valid){
      alert("Complete el formulario para continuar!");
      return;
    }
    this.submit = form.valid;
    this.managerService.login(this.user, this.pass).subscribe(this.onLogin);
  }

  onLogin(resp){
    let IsLogin = (resp.msg == "Validado");
    if(!IsLogin){
        alert("Usuario o contraseña no válidos");
        return IsLogin;
    }
    alert("Usuario validado con éxito...  Bienvenido!");
    window.location.href = "./Vitrina";
  }
}
