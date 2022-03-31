import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localstorage: LocalStorageService,  private router: Router) { }


  canActivate(): boolean  {

      if(this.localstorage.retrieve('user') == 'Status.SUCCESS'){
        return true;
      }
      alert("not logged in")
      this.router.navigate(['/login'])
      return false;
  }

}
