import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import  { UpdateComponent} from './update/update.component'

const routes: Routes = [ 
  {path : '' , redirectTo : 'login', pathMatch  : 'full'},
  {path : 'login' ,    component : LoginComponent} ,
  {path : 'register' , component : RegisterComponent},
  {path : 'home' ,  component : HomeComponent},
  {path : 'update' ,  component : UpdateComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
