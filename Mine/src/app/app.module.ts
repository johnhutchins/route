import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//after separating the router from the app module, be sure to import the router module ONLY ONCE.
//which would be in the location of where the main routes are saved... this can be deleted.
//import { RouterModule } from "@angular/router";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';
import { LoginComponent } from './user/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }), //simulates a backend web server for getting a saving data.
    ProductModule,
    UserModule,
    MessageModule,
    //All main routes must be declared last. routes are processed in the order in which the routes are defined.
    //if the appRoutingModule is listed before the other modules that have child routes, the wildcard will be used
    //and you'll be redirected to the page not found screen
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
