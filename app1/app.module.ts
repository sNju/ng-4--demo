import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { InputOutputComponent } from './input-output/input-output.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
