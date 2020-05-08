import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './customer/administrator.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'registerAdmin',component: AdministratorComponent},
  {path:'registerCustomer',component:CustomerComponent},
  {path: 'login',component:LoginComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdministratorComponent,CustomerComponent,LoginComponent]