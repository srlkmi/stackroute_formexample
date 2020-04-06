import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ExistuserComponent } from '../existuser/existuser.component';
import { NewuserComponent } from '../newuser/newuser.component';

const routes : Routes =
[
  {
      path:'login',
      component:LoginComponent,
      children :
      [
        {
          path:'view/exist',
          component:ExistuserComponent
        },
        {
          path:'view/newuser',
          component:NewuserComponent
        }
      ]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
     path:'',
     redirectTo:'home',
     pathMatch:'full'

  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class MyrouteModule { }
