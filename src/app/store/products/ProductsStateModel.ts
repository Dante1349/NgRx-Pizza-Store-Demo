import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface IProduct {
  id: string
  name: string
  price: number
  vegetarian: boolean
}

export const productsEntityAdapter: EntityAdapter<IProduct> =
  createEntityAdapter<IProduct>({})

export type IProductsState = EntityState<IProduct>

export const initialProductState = productsEntityAdapter.getInitialState()
