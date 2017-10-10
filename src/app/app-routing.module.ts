import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipeModule', canLoad: [AuthGuardService] },
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule', canLoad: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
