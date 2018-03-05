import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from "./page-not-found.component";

// Feature Modules
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { CustomerService } from './customer/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    PageNotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
