import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

export const routes: Routes = [
  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'product-add', component: ProductAddComponent
  },
  {
    path: 'product-edit/:id', component: ProductEditComponent
  },
  {
    path: 'product-delete', component: ProductDeleteComponent
  }
];
