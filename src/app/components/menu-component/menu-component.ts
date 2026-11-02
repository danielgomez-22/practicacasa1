import { Component } from '@angular/core';
import { ServiceAuth } from '../../services/service-auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceAuth: ServiceAuth = inject(ServiceAuth);
  public usuario = this._serviceAuth.usuarioIniciado;

  cerrarSesion() {
    this._serviceAuth.cerrarSesion();
  }
}
