import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
