import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/AppStateModel";
import {initialSettingsState, ISettingsState} from "../../store/settings/SettingsStateModel";
import {Subscription} from "rxjs";
import {SetShowProductsAction} from "../../store/settings/SettingsStateActions";
import {AddProductAction} from "../../store/products/ProductsStateActions";
import {generatee7} from "../../common/utils";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  settings: ISettingsState = initialSettingsState;
  private settingsSubscription: Subscription;

  constructor(private store: Store<IAppState>) {
    this.settingsSubscription = this.store.select('settingsState').subscribe((settings: ISettingsState) => this.settings = settings)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.settingsSubscription.unsubscribe()
  }

  setShowProduct($event: any) {
    this.store.dispatch(new SetShowProductsAction($event.target.checked))
  }

  addRandomPizza() {
    this.store.dispatch(new AddProductAction({
      id: generatee7(),
      name: "Pizza Al Random",
      price: (500 + Math.round(Math.random() * 1000)),
      vegetarian: Boolean(Math.round(Math.random()))
    }))
  }
}
