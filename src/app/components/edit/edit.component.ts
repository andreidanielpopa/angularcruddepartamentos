import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  public dept: Departamento;

  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
  ) {
    this.dept = new Departamento(0, '', '')
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this._service.getDepartamentoById(id).subscribe(response => {
        this.dept = response;
      })
    })

  }

  updateDept(): void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let editedDept = new Departamento(id, nombre, localidad);

    this._service.updateDepartamento(editedDept).subscribe(response => {
      this._router.navigate(['/']);
    })
  }
}
