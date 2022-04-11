import { Injectable } from '@angular/core';
import {IProduct} from "../store/products/ProductsStateModel";
import {Pizza} from "../common/enums";
import {generatee7} from "../common/utils";

@Injectable({
  providedIn: 'root'
})
export class DatabaseMockService {

  private mockProducts: IProduct[] = [
    {
      id: generatee7(),
      name: Pizza.MARGHERITA,
      price: 699,
      vegetarian: true
    },
    {
      id: generatee7(),
      name: Pizza.FUNGHI,
      price: 799,
      vegetarian: true
    },
    {
      id: generatee7(),
      name: Pizza.MAFIA,
      price: 849,
      vegetarian: false
    }
  ]

  constructor() { }

  async getAllProducts(): Promise<IProduct[]> {
    console.log('[DATABASE] - getAllProducts')
    console.log('[DATABASE] - current state', this.mockProducts)
    return this.mockProducts
  }

  async addProduct(product: IProduct): Promise<void> {
    this.mockProducts = [...this.mockProducts, product]
    console.log('[DATABASE] - addProduct', product)
    console.log('[DATABASE] - current state', this.mockProducts)
  }

  async removeProduct(id: string): Promise<void> {
    this.mockProducts = this.mockProducts.filter((p: IProduct) => p.id !== id)
    console.log('[DATABASE] - removeProduct', id)
    console.log('[DATABASE] - current state', this.mockProducts)
  }
}
