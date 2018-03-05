import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

@NgModule({
    imports:[ 
        RouterModule.forChild([
        { path:'login', component:LoginComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
    ],
    declarations:[
        LoginComponent
    ]
})

export class LoginModule {}