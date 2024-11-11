import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";

@Injectable()

export class ServiceDepartamentos {
    constructor(private _http: HttpClient) { }

    getDepartamentos(): Observable<any> {
        let request = 'api/departamentos';
        let url = environment.apiUrlDepartamentos + request;

        return this._http.get(url);
    }

    insertDepartamento(dept: Departamento): Observable<any> {
        let json = JSON.stringify(dept);
        let header = new HttpHeaders();
        header = header.set('Content-type', 'application/json');

        let request = 'api/departamentos';
        let url = environment.apiUrlDepartamentos + request;

        return this._http.post(url, json, { headers: header });
    }
}