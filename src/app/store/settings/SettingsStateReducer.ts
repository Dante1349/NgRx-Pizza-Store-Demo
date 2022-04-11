import {initialSettingsState, ISettingsState} from "./SettingsStateModel";
import {SettingsStateActions, SettingsStateActionTypes} from "./SettingsStateActions";

export function settingsStateReducer(state: ISettingsState | undefined, action: SettingsStateActions) {
  if (state) {
    switch (action.type) {
      case SettingsStateActionTypes.SetShowProducts: {
        return {...state, showProducts: action.payload}
      }
      case SettingsStateActionTypes.SetVegetarian:
        return {...state, vegetarian: action.payload}
      default:
        return state
    }
  } else {
    return initialSettingsState
  }
}
