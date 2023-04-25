import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { IAuth } from '../models/IAuth';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.validateAuth();
  }

  validateAuth(): boolean {
    const session = localStorage.getItem('alsoferUser');

    if (session) {
      const user: any = JSON.parse(session);

      if (user.id > 0 && user.ativo === null) {
        this.auth.isAuthenticated.emit(true);
        return true;
      }
    }

    this.router.navigate(['/login']);
    this.auth.isAuthenticated.emit(false);
    return false;
  }
}
