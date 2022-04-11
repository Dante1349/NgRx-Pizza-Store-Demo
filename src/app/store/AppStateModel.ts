import {ISettingsState} from "./settings/SettingsStateModel";
import {IProductsState} from "./products/ProductsStateModel";
import {settingsStateReducer} from "./settings/SettingsStateReducer";
import {productsStateReducer} from "./products/ProductsStateReducer";
import {ActionReducerMap} from "@ngrx/store";
import {ProductsStateEffects} from "./products/ProductsStateEffects";

export interface IAppState {
  settingsState: ISettingsState,
  productsState: IProductsState
}

export const reducers: ActionReducerMap<IAppState, any> = {
  settingsState: settingsStateReducer,
  productsState: productsStateReducer
}

export const effects: any[] = [
  ProductsStateEffects,
];

