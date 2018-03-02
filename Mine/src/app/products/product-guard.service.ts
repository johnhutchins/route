import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from '../user/auth.service';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isLoggedIn()){
        return true;
    } else {
        this.router.navigate(["/login"]);
        return false;
    }
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()){
        alert("you aren't logged in!");
    }
  }

}