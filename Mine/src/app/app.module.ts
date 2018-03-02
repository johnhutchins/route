import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

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

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }), //simulates a backend web server for getting a saving data.
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent},
      //see user.module for routing to the login page. keeping that route with it's sister component is best practice
      //{ path: "user", component: LoginComponent },
      { path: '', redirectTo: "welcome", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent}
    ]),
    ProductModule,
    UserModule,
    MessageModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
