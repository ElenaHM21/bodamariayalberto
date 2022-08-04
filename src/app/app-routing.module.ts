import { FotosComponent } from './fotos/fotos.component';
//import { LoginComponent } from './login/login.component';
//import { VigilanteGuard } from './vigilante.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"fotos",component:FotosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
