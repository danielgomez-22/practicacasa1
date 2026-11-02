import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/login-component/login-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { SubirImagenesComponent } from './components/subir-imagenes-component/subir-imagenes-component';

const routes: Routes = [
  {path:'',component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'perfil', component: PerfilComponent , canActivate: [AuthGuard]},
  {path:'subordinados', component: SubordinadosComponent, canActivate: [AuthGuard]},
  {path:'subir-imagenes', component: SubirImagenesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
