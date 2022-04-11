export interface ISettingsState {
  showProducts: boolean
  vegetarian: boolean
}

export const initialSettingsState: ISettingsState = {
  showProducts: true,
  vegetarian: false
}
