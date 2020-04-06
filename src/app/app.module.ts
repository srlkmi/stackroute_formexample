import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MyrouteModule } from './myroute/myroute.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ExistuserComponent } from './existuser/existuser.component';
import { NewuserComponent } from './newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ExistuserComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyrouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
