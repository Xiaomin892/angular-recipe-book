import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../ngrx-store/app.reducers';
import * as fromAuth from './ngrx-store/auth.reducers';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').map((authState: fromAuth.State ) => {
      return authState.authenticated;
    });
  }

  canLoad(route: Route) {
  	return this.store.select('auth').map((authState: fromAuth.State ) => {
	    if (!authState.authenticated) {
		    this.router.navigate(['/signin']);
	    }
		  return authState.authenticated;
	  });
  }

}
