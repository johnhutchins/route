import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";

//to use a constant that contains the routes, simply add the const name to the 
//forRoot() method.
/* const ROUTES = [
    { path: "welcome", component: WelcomeComponent},
    { path: '', redirectTo: "welcome", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent}
  ]; */

@NgModule({
    imports: [
        RouterModule.forRoot([
        { path: "welcome", component: WelcomeComponent},
        { path: '', redirectTo: "welcome", pathMatch: "full" },
        { path: "**", component: PageNotFoundComponent}
      ]) 
    ],
    //if this is not exported, the app.module won't have access and will cause an error
    exports: [RouterModule]
})

export class AppRoutingModule {}