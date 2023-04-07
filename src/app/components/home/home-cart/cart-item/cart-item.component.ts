import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IDataCart } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
import { formatter } from 'src/app/shared/formatter/format';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
 @Input() data!: IDataCart;
  constructor(private router: Router, private commonService: CommonService) {
  }
 convertToPrice(price: number) {
  return formatter.format(price);
  }
  changeQuantity(id: string, type: string) {
    this.commonService.changeQuantityCart(id, type);
  }
  removeItemFromCart(id: string) {
    this.commonService.removeItemFromCart(id);
  }
  goToItem(id: string) {
    this.router.navigateByUrl(`/home/product/${id}`);
    this.commonService.setCurrentUrl('shop');
  }
}

    
