import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';
import { Router }   from '@angular/router';


@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user:UserService, private route:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.user.getUserLoggedIn() == false){
        this.route.navigate(['/']);//if we are not logged in or our url is the same as after loggedin then it will go on home
        alert('please login first');
      }

    return this.user.getUserLoggedIn();
  }

}
