import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import  {CseComponent } from './cse/cse.component';
import  {EceComponent } from './ece/ece.component';
import  { EeeComponent }from "./eee/eee.component";
import  { MechComponent }from "./mech/mech.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component"

const routes: Routes = [
  {path :'home', component: HomeComponent},
  {path :'home/cse', component: CseComponent},
  {path:'home/ece', component: EceComponent },
  {path:'home/eee', component: EeeComponent },
  {path:'home/mech', component: MechComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routinComponet=[HomeComponent,CseComponent,EceComponent,EeeComponent,MechComponent,LoginComponent,RegisterComponent];
