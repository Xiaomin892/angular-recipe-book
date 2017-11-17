import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './features/auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'recipes', loadChildren: './features/recipes/recipe.module#RecipeModule', canLoad: [AuthGuardService] },
  { path: 'shopping-list', loadChildren: './features/shopping-list/shopping-list.module#ShoppingListModule', canLoad: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
