import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlueColorDirective } from './blue-color.directive';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [ //this contains components and directives
    AppComponent,
    HeaderComponent,
    BlueColorDirective,
    FirstRouteComponent,
    SecondRouteComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent,
    ChildComponent
  ],
  imports: [ //we imports other modules here like http or router etc
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'first',
        canActivate:[AuthguardGuard],
        component: FirstRouteComponent
      },
      {
        path: 'second',
        canActivate:[AuthguardGuard],
        component:  SecondRouteComponent
      }
      // {
      //   path: '***',
      //   component:  notFou
      // }
    ])
  ],
 providers: [UserService, AuthguardGuard], //we put servises here
  bootstrap: [AppComponent]
})
export class AppModule { }
