import { Routes } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { JavaScriptComponent } from './views/JavaScript.component';
import { TypeScriptComponent } from './views/TypeScript.component';
import { Es5Component } from './src/es5/es5.component';
import { Es6Component } from './src/es6/es6.component';
import { BasicComponent } from './src/ts-basic/basic.component';

export const ruotes:Routes = [
{path:'', component:HomeComponent},

{path:'JavaScript',
 component:JavaScriptComponent,
 children:[
    {path:'es5', component:Es5Component},
    {path:'es6', component:Es6Component}
 ]
},

{   path:'TypeScript',
    component:TypeScriptComponent,
    children:[
        {path:'type/:checkParams', component:BasicComponent}
    ]
}
    
]