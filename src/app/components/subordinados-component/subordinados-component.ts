import { ChangeDetectorRef, Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/service-empleado';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent {
  public subordinados!: Empleado[];

  constructor(
    private _serviceEmpleado: ServiceEmpleado,
    private _cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
    this._serviceEmpleado.cargarSubordinados().subscribe(response => {
      this.subordinados = response;
      this._cdr.detectChanges();
    })
  }
}