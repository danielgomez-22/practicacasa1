import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubirImagenesComponent } from './components/subir-imagenes-component/subir-imagenes-component';
import { AuthGuard } from './guards/auth-guard';
import { ServiceEmpleado } from './services/service-empleado';
import { ServiceAuth } from './services/service-auth';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SubordinadosComponent,
    PerfilComponent,
    SubirImagenesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthGuard, provideBrowserGlobalErrorListeners(), ServiceAuth, ServiceEmpleado],
  bootstrap: [App],
})
export class AppModule {}
