import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatCreateComponent } from './page/boat-create/boat-create.component';
import { BoatComponent } from './page/boat/boat.component';
import { CarCreateComponent } from './page/car-create/car-create.component';
import { CarComponent } from './page/car/car.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductsComponent } from './page/products/products.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/create',
    component: CarCreateComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'boats',
    component: BoatComponent,
  },
  {
    path: 'boats/create',
    component: BoatCreateComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
