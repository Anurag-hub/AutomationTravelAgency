import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {AppRoutingModule,routingComponents} from './app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CreditCardComponent } from './credit-card/credit-card.component';
import { BookingComponent } from './booking/booking.component';

import { LoginComponent } from './login/login.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RouteListComponent } from './route-list/route-list.component';
import {CustomerComponent} from './customer/customer.component';
import {AdministratorComponent} from './customer/administrator.component';
import {RouteComponent} from './route/route.component';
 import { DriverComponent } from './driver/driver.component';
import {ChangePasswordComponent} from './changePassword/changepassword.component';
import {RouterModule, Router, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {DashBoardComponent} from './dashboard/dashboard.component'
import { AdminPost } from './vehicle/admin.post';
import { AdminPut} from './vehicle/admin.put';
import { AdminDelete } from './vehicle/admin.delete';
import { AdminComponent } from './vehicle/admin.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AdminLoginComponent} from './AdminLogin/admin.login.component'
import {RegistrationOptionComponent} from './login/registration.options'
import {AdminOptionComponent} from './AdminDashboard/admin.options'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
   CreditCardComponent,
    BookingComponent,
   LoginComponent,
    VehicleListComponent,
    RouteListComponent,
    CustomerComponent,
    RouteComponent,
    AdministratorComponent,
    ChangePasswordComponent,
    LogoutComponent,
    AdminPost,
    AdminPut,AdminDelete,DriverComponent,
    AdminLoginComponent,
    HomepageComponent,
    DashBoardComponent,
    RegistrationOptionComponent,
    AdminOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: "", 
        component: AppComponent,
        children: [
          { path: "", component: HomepageComponent },
          {path: "registrationOption",component: RegistrationOptionComponent},
          { path: "registerAdmin", component: AdministratorComponent },
          {path : "registerCustomer",component: CustomerComponent},
          {path: "dash",component:DashBoardComponent},
          {path:"login",component:LoginComponent},
          {path:"logout",component:LogoutComponent},
          {path:"changePass",component:ChangePasswordComponent},
          {path:"adminLogin",component:AdminLoginComponent},
          {path:"adminOptions",component:AdminOptionComponent}
        ]
    },

  ])
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }


// {
//   path:"",
//   children:[
//     {path : "registerCustomer",component: CustomerComponent},
//     {path:"login",component:LoginComponent}
//   ]
// }


//     AppRoutingModule

//   ],
//   providers: [
//     HttpClientModule,
//   ],
//   bootstrap: [AppComponent],
  
// })
// export class AppModule { 
//   constructor(){
//     const appRoutes: Routes = [
//       {
//         path: '',
//         component: AppComponent,
//         children: [
//           {path:'registerAdmin',component: AdministratorComponent},
//           {path:'registerCustomer',component:CustomerComponent} 
//           // { path: 'events', component: EventsListComponent },
//           // { path: 'events/:id', component: EventDetailsComponent },
//           // { path: 'home', component: HomeComponent },
//           // { path: 'view', component: ViewPostComponent },
//           // { path: '', component: PlaceholderComponent }
//         ]
//       },
//       { path: 'register-main', component: RegistrationOptionComponent },   ];
//   }
// }
