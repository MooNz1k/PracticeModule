import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { CustomerComponent } from "./customer/customer.component";


const ROUTES = [
    { 
        path:'home', 
        component:HomeComponent },
    { 
        path:'', 
        redirectTo:'home', 
        pathMatch:'full'},
    { 
        path:'customer', 
        component: CustomerComponent
    },
    { 
        path:'**',
        component:PageNotFoundComponent
    },
  
];
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES )
    ],
    exports:[ RouterModule ]


})

export class AppRoutingModule { }