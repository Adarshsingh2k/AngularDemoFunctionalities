import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthLogicService } from './auth-logic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private authLogic: AuthLogicService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authLogic.isAuthenticated()) {

      return true;
    }
    else {
      this.router.navigate([''])
      return false
    }

    return false;
  }

}
