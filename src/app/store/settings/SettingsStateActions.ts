import {Action} from "@ngrx/store";

export enum SettingsStateActionTypes {
  SetShowProducts = '[Settings] SetShowProducts',
  SetVegetarian = '[Settings] SetVegetarian'
}

export class SetShowProductsAction implements Action {
  readonly type = SettingsStateActionTypes.SetShowProducts

  constructor(public payload: boolean) {
  }
}

export class SetVegetarianAction implements Action {
  readonly type = SettingsStateActionTypes.SetVegetarian

  constructor(public payload: boolean) {
  }
}

export type SettingsStateActions =
  SetShowProductsAction |
  SetVegetarianAction

