import {inject, Injectable} from '@angular/core';
import { ServiceEmpleado } from './service-empleado';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Empleado } from '../models/empleado';
import { signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable(
    {providedIn: 'root'}
)

export class ServiceAuth {
    private _serviceEmpleado: ServiceEmpleado = inject(ServiceEmpleado);
    private _http: HttpClient = inject(HttpClient);
    private _router = inject(Router);
    url = environment.urlApiEmpleados;
    public usuarioIniciado = signal<Empleado | null>(null);

    iniciarSesionToken(login: Login): Observable <any> { 
        let request = "auth/login";
        let json = JSON.stringify(login);
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + request, json, { headers: header });
    }

    iniciarSesion(token: string): void {
        sessionStorage.setItem("TOKEN", token);
        this._serviceEmpleado.cargarPerfil().subscribe(usuarioActivo => {
            this.usuarioIniciado.set(usuarioActivo);
        });
    }

    cerrarSesion(): void {
        sessionStorage.removeItem("TOKEN");
        this.usuarioIniciado.set(null);
        this._router.navigate(['/login']);
    }
}