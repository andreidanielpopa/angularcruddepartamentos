import { Departamento } from './../../models/departamento';
import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../service/service.departamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public departamentos !: Array<Departamento>;

  constructor(private _service: ServiceDepartamentos) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    })
  }
}
