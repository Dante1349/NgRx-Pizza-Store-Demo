import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct, IProductsState} from "../../store/products/ProductsStateModel";
import {IAppState} from "../../store/AppStateModel";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {initialSettingsState, ISettingsState} from "../../store/settings/SettingsStateModel";
import {DeleteProductAction} from "../../store/products/ProductsStateActions";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {
  products: IProduct[] = []
  settings: ISettingsState = initialSettingsState
  private productSubscription: Subscription
  private settingsSubscription: Subscription

  constructor(private store: Store<IAppState>) {
    this.productSubscription = this.store.select('productsState').subscribe((productState: IProductsState) => {
      this.products = Object.values(productState.entities) as IProduct[]
    })
    this.settingsSubscription = this.store.select('settingsState').subscribe((settingsState: ISettingsState) => {
      this.settings = settingsState
    })
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }

  deleteProduct(id: string) {
    this.store.dispatch(new DeleteProductAction(id))
  }
}
