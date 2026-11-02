import { ChangeDetectorRef, Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleado } from '../../services/service-empleado';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent {
  public perfil!: Empleado;

  constructor(
    private _serviceEmpleado: ServiceEmpleado,
    private _cdr: ChangeDetectorRef

  ) {}

  ngOnInit(): void {
    this._serviceEmpleado.cargarPerfil().subscribe(response => {
      this.perfil = response;
      this._cdr.detectChanges();
    })
  }
}
