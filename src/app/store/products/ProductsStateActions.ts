import {Action} from "@ngrx/store";
import {IProduct} from "./ProductsStateModel";
import {Update} from "@ngrx/entity";

export enum ProductsStateActionTypes {
  LoadProductDataBegin = "[Products] LoadProductDataBegin",
  LoadProductDataSuccess = "[Products] LoadProductDataSuccess",
  LoadProductDataFailure = "[Products] LoadProductDataFailure",

  AddProduct = '[PianoRoll] AddProduct',
  AddProducts = '[PianoRoll] AddProducts',
  UpsertProduct = '[PianoRoll] UpsertProduct',
  UpsertProducts = '[PianoRoll] UpsertProducts',
  UpdateProduct = '[PianoRoll] UpdateProduct',
  UpdateProducts = '[PianoRoll] UpdateProducts',
  DeleteProduct = '[PianoRoll] DeleteProduct',
  DeleteProducts = '[PianoRoll] DeleteProducts',
}

export class LoadProductDataBeginAction implements Action {
  readonly type = ProductsStateActionTypes.LoadProductDataBegin
}

export class LoadProductDataSuccessAction implements Action {
  readonly type = ProductsStateActionTypes.LoadProductDataSuccess

  constructor(public payload: IProduct[]) {
  }
}

export class LoadProductDataFailureAction implements Action {
  readonly type = ProductsStateActionTypes.LoadProductDataFailure

  constructor(public payload: any) {
  }
}

export class AddProductAction implements Action {
  readonly type = ProductsStateActionTypes.AddProduct

  constructor(public payload: IProduct) {
  }
}

export class AddProductsAction implements Action {
  readonly type = ProductsStateActionTypes.AddProducts

  constructor(public payload: IProduct[]) {
  }
}

export class UpsertProductAction implements Action {
  readonly type = ProductsStateActionTypes.UpsertProduct

  constructor(public payload: IProduct) {
  }
}

export class UpsertProductsAction implements Action {
  readonly type = ProductsStateActionTypes.UpsertProducts

  constructor(public payload: IProduct[]) {
  }
}

export class UpdateProductAction implements Action {
  readonly type = ProductsStateActionTypes.UpdateProduct

  constructor(public payload: Update<IProduct>) {
  }
}

export class UpdateProductsAction implements Action {
  readonly type = ProductsStateActionTypes.UpdateProducts

  constructor(public payload: Update<IProduct>[]) {
  }
}

export class DeleteProductAction implements Action {
  readonly type = ProductsStateActionTypes.DeleteProduct

  constructor(public payload: string) {
  }
}

export class DeleteProductsAction implements Action {
  readonly type = ProductsStateActionTypes.DeleteProducts

  constructor(public payload: string[]) {
  }
}

export type ProductStateActions =
  LoadProductDataBeginAction |
  LoadProductDataSuccessAction |
  LoadProductDataFailureAction |
  AddProductAction |
  AddProductsAction |
  UpsertProductAction |
  UpsertProductsAction |
  UpdateProductAction |
  UpdateProductsAction |
  DeleteProductAction |
  DeleteProductsAction

