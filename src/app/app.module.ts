import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { CoreModule } from './core/core.module';
import { appReducers } from './ngrx-store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(appReducers)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
