import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { customDirective } from './custom-directives/custom.directive';
import { CustomPipe } from './custom-pipes/custom.pipe';

import { HomeComponent } from './views/home.component';
import { JavaScriptComponent } from './views/JavaScript.component';
import { TypeScriptComponent } from './views/TypeScript.component';
import { ruotes } from './app.route';
import { Es5Component } from './src/es5/es5.component';
import { Es6Component } from './src/es6/es6.component';
import { BasicComponent } from './src/ts-basic/basic.component';



@NgModule({
  declarations: [
    AppComponent,
    customDirective,
    CustomPipe,
    HomeComponent,
    JavaScriptComponent,
    TypeScriptComponent,
    Es5Component,
    Es6Component,
    BasicComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ruotes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
