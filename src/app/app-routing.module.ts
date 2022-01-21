import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent } from "./inicio/inicio.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import { LoginComponent} from "./login/login.component";

const routes: Routes = [
  
  {path: "", redirectTo: "initial", pathMatch: "full"},
  {path: "signUp", component: CadastroComponent},
  {path: "signIn", component:  LoginComponent},
  {path: "initial" , component : InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
