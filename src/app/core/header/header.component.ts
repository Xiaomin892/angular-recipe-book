import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../features/auth/auth.service';
import * as fromApp from '../../ngrx-store/app.reducers';
import * as fromAuth from '../../features/auth/ngrx-store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService,
              private router: Router,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => console.log(response)
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/signin']);
  }
}
