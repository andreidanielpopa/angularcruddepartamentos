import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  public dept!: Departamento;

  constructor(
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      let nombre = params['nombre'];
      let localidad = params['localidad'];

      this.dept = new Departamento(id, nombre, localidad)
    })

  }
}
