import { Departamento } from './../models/departamento';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

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

    getDepartamentoById(idDept: number): Observable<any> {
        let request = 'api/departamentos/' + idDept;
        let url = environment.apiUrlDepartamentos + request;

        return this._http.get(url);
    }

    updateDepartamento(departamento: Departamento): Observable<any> {
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set('Content-type', 'application/json');

        let request = 'api/departamentos/';
        let url = environment.apiUrlDepartamentos + request;

        return this._http.put(url, json, { headers: header });
    }

    deleteDepartamento(idDept: number): Observable<any> {
        let request = 'api/departamentos/' + idDept;
        let url = environment.apiUrlDepartamentos + request;

        return this._http.delete(url);
    }
}