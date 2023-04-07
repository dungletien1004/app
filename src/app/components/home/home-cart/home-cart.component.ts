import { Component, OnInit } from '@angular/core';
import { IDataCart } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
import { formatter } from 'src/app/shared/formatter/format';

@Component({
  selector: 'app-home-cart',
  templateUrl: './home-cart.component.html',
  styleUrls: ['./home-cart.component.scss']
})
export class HomeCartComponent implements OnInit {
  cart!: IDataCart[];
  length!: number;
  tax: number = 0;
  constructor(private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.commonService.cart$.subscribe(data => this.cart = data);
    this.commonService.length$.subscribe(data => this.length = data);
  }
  caclPrice() {
    const price = this.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    this.tax = 0.1 * price;
    return price;
  }
  convertToPrice(price: number) {
    return formatter.format(price);
    }
}
