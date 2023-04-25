import { InsertUserComponent } from './pages/insert-user/insert-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { InsertAddressComponent } from './pages/insert-address/insert-address.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'app', loadChildren: () => import('./app.module').then(m => m.AppModule) },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cliente/incluir', component: InsertUserComponent, canActivate: [AuthGuard] },
  { path: 'cliente/editar/:id', component: InsertUserComponent, canActivate: [AuthGuard] },
  { path: 'cliente/:idcliente/endereco/incluir', component: InsertAddressComponent, canActivate: [AuthGuard] },
  { path: 'cliente/:idcliente/endereco/editar/:id', component: InsertAddressComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
