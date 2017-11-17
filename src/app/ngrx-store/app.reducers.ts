import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../features/shopping-list/ngrx-store/shopping-list.reducers';
import * as fromAuth from '../features/auth/ngrx-store/auth.reducers';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer
};
