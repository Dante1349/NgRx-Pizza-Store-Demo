import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {DatabaseMockService} from "../../services/database-mock.service";
import {
  AddProductAction, DeleteProductAction,
  LoadProductDataFailureAction,
  LoadProductDataSuccessAction,
  ProductsStateActionTypes
} from "./ProductsStateActions";
import {tap} from "rxjs/operators";
import {IAppState} from "../AppStateModel";
import {Store} from "@ngrx/store";
import {IProduct, IProductsState} from "./ProductsStateModel";

@Injectable()
export class ProductsStateEffects {
  constructor(private actions: Actions,
              private databaseMockService: DatabaseMockService,
              private store: Store<IAppState>) {
  }

  LoadProductDataBeginEffect = createEffect(() =>
      this.actions.pipe(
        ofType(ProductsStateActionTypes.LoadProductDataBegin),
        tap(() => {
          this.databaseMockService.getAllProducts()
            .then((products: IProduct[]) => this.store.dispatch(new LoadProductDataSuccessAction(products)))
            .catch((e) => {
              console.error("executing LoadProductDataBeginEffect failed: ", e)
              this.store.dispatch(new LoadProductDataFailureAction(e))
            });
        })
      ),
    {dispatch: false}
  )

  AddProductEffect = createEffect(() =>
      this.actions.pipe(
        ofType(ProductsStateActionTypes.AddProduct),
        concatLatestFrom(() => this.store.select("productsState")),
        tap(([action,state]: [AddProductAction, IProductsState]) => {
          this.databaseMockService.addProduct(action.payload)
            .catch((e:any) => console.error("executing AddProductEffect failed: ", e))
        })
      ),
    {dispatch: false}
  )

  DeleteProductEffect = createEffect(() =>
      this.actions.pipe(
        ofType(ProductsStateActionTypes.DeleteProduct),
        concatLatestFrom(() => this.store.select("productsState")),
        tap(([action,state]: [DeleteProductAction, IProductsState]) => {
          this.databaseMockService.removeProduct(action.payload)
            .catch((e:any) => console.error("executing DeleteProductEffect failed: ", e))
        })
      ),
    {dispatch: false}
  )

}
