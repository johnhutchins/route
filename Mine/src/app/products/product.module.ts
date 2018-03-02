import { NgModule, Component } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    SharedModule, 
    RouterModule.forChild([
      { path: "products", component: ProductListComponent, canActivate: [ProductGuardService]}
    ]) 
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule {}
