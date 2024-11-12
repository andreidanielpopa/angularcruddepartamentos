import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../service/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajalocalidad') cajcajaLocalidadad!: ElementRef;

  constructor(
    private _service: ServiceDepartamentos,
    private _router: Router
  ) { }

  insertDepartamento(): void {
    let num = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let loc = this.cajcajaLocalidadad.nativeElement.value;
    let newDept = new Departamento(num, nombre, loc);

    this._service.insertDepartamento(newDept).subscribe(response => {
      this._router.navigate(['/'])
    })
  }
}
