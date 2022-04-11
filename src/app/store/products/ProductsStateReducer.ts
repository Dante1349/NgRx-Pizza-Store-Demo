import {initialProductState, IProductsState, productsEntityAdapter} from "./ProductsStateModel";
import {ProductsStateActionTypes, ProductStateActions} from "./ProductsStateActions";

export function productsStateReducer(state: IProductsState | undefined, action: ProductStateActions): IProductsState {
  if (state) {
    switch (action.type) {
      case ProductsStateActionTypes.LoadProductDataBegin:
        return state
      case ProductsStateActionTypes.LoadProductDataSuccess:
        return productsEntityAdapter.setAll(action.payload, state)
      case ProductsStateActionTypes.LoadProductDataFailure:
        return state
      case ProductsStateActionTypes.AddProduct:
        return productsEntityAdapter.addOne(action.payload, state)
      case ProductsStateActionTypes.AddProducts:
        return productsEntityAdapter.addMany(action.payload, state)
      case ProductsStateActionTypes.UpsertProduct:
        return productsEntityAdapter.upsertOne(action.payload, state)
      case ProductsStateActionTypes.UpsertProducts:
        return productsEntityAdapter.upsertMany(action.payload, state)
      case ProductsStateActionTypes.UpdateProduct:
        return productsEntityAdapter.updateOne(action.payload, state)
      case ProductsStateActionTypes.UpdateProducts:
        return productsEntityAdapter.updateMany(action.payload, state)
      case ProductsStateActionTypes.DeleteProduct:
        return productsEntityAdapter.removeOne(action.payload, state)
      case ProductsStateActionTypes.DeleteProducts:
        return productsEntityAdapter.removeMany(action.payload, state)
      default:
        return state
    }
  } else {
    return initialProductState
  }
}
