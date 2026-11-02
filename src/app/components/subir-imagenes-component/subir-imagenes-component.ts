import { ChangeDetectorRef, Component } from '@angular/core';
import { ServiceEmpleado } from '../../services/service-empleado';

@Component({
  selector: 'app-subir-imagenes-component',
  standalone: false,
  styleUrl: './subir-imagenes-component.css',
  templateUrl: './subir-imagenes-component.html',
})
export class SubirImagenesComponent {
  // guardamos imagen enun string para poder miostrala despues
  public listaImagenes: string[] = [];

   constructor(
    private _service: ServiceEmpleado,
    private _cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    const imagenesGuardadas = sessionStorage.getItem('mis_imagenes');
    if (imagenesGuardadas) {
      this.listaImagenes = JSON.parse(imagenesGuardadas);
    }

  }

  subirImagen(input: HTMLInputElement): void {
    let file: File = input.files![0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64 = (reader.result as string).split(',')[1];
      
      this._service.subirArchivo(file.name, base64).subscribe(response => {
        console.log('Archivo subido correctamente', response);
        //guardamos la url qeu viene del servidor
        this.listaImagenes.push(response.urlFile);
        sessionStorage.setItem('mis_imagenes', JSON.stringify(this.listaImagenes));
        this._cdr.detectChanges();
      })
    }
  }
}
