import { Component } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';

    constructor(private authService: AuthService, private router: Router) { }

    logOut(): void {
        this.authService.logout();
        this.router.navigate(["/welcome"]);
        
        //no secondary route is used with the below code
        //this.router.navigateByUrl('/welcome');
        console.log('Log out');
    }
}
