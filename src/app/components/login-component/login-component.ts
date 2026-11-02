import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ServiceAuth } from '../../services/service-auth';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(
    private _serviceAuth: ServiceAuth, 
    private _router: Router 
  ) {}
  login(){
    let usuario = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login( usuario, password);
    
    this._serviceAuth.iniciarSesionToken(login).subscribe(response => {
      this._serviceAuth.iniciarSesion(response.response);
      sessionStorage.setItem("TOKEN", response.response);
      this._router.navigate(['/']);
    });
  }
}
