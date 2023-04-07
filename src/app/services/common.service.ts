import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataShop, IDataCart, IDataProduct } from '../data/data';
import { IFilter, initFilter } from '../shared/interface/type';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public currentUrl$ = new BehaviorSubject<string>('shop');
  public cart$ = new BehaviorSubject<IDataCart[]>([]);
  public length$ = new BehaviorSubject<number>(0);
  public fillter$ = new BehaviorSubject<IFilter>(initFilter);
  constructor() { }

  setCurrentUrl(url: string) {
    this.currentUrl$.next(url);
  }
  setFilter(_value: IFilter) {
    this.fillter$.next(_value);
  }
  addItemToCart(_item: IDataProduct) {
    const cart = this.cart$.value;
    const index = cart.findIndex(item => item.id === _item.id);
    const newCart = index === -1 ? [...cart, {
      ..._item,
      quantity: 1
    }] : cart.map(item => item.id === _item.id ? ({...item, quantity: item.quantity + 1}) : item);
    this.cart$.next(newCart);
    this.getCartLength();
  }
  getCartLength() {
    this.length$.next(this.cart$.value.length);
  }
  changeQuantityCart(_id: string, type: string) {
    if (type === 'PLUS') {
      const cart = this.cart$.value;
      const newCart = cart.map(item => item.id === _id ? ({...item, quantity: item.quantity + 1}) : item);
      this.cart$.next(newCart);
    } else {
      const cart = this.cart$.value;
      const item = cart.find(value => value.id === _id);
      if(item) {
        item.quantity -= 1;
      }
      if (item?.quantity === 0) {
        const index = cart.indexOf(item);
        cart.splice(index, 1); 
      }
      this.cart$.next(cart);
      this.getCartLength();
    }
  }
  removeItemFromCart(_id: string) {
    const cart = this.cart$.value;
    const newCart = cart.filter(item => item.id !== _id);
    this.cart$.next(newCart);
    this.getCartLength();
  }
}
