import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Empleado } from "../models/empleado";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ServiceEmpleado {
    url = environment.urlApiEmpleados;
    urlImagenes = environment.urlApiImagenes;

    constructor(
        private _http: HttpClient
    ) {}

    obtenerToken() {
        return sessionStorage.getItem("TOKEN");
    }

    cargarPerfil(): Observable<Empleado> {
        let request = "api/empleados/perfilempleado";
        let token = this.obtenerToken();
        let header = { 'Authorization': `Bearer ` + token };

        return this._http.get<Empleado>(this.url + request, { headers: header });
    }

    cargarSubordinados(): Observable<Empleado[]> {
        let request = "api/empleados/subordinados";
        let token = this.obtenerToken();
        let header = { 'Authorization': `Bearer ` + token };

        return this._http.get<Empleado[]>(this.url + request, { headers: header });
    }

    subirArchivo(fileName: string, fileContent: string): Observable<any>{
        let request = "api/testingfiles";
        let imagen = {
            fileName: fileName,
            fileContent: fileContent
        }

        return this._http.post(this.urlImagenes + request, imagen);
    }
    getArchivos() {
        return this._http.get<string[]>('http://apipostfiles.azurewebsites.net/api/tus-endpoints-de-archivos');
    }
}

