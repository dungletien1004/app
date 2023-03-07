import { Component, Input } from '@angular/core';
import { IDataProduct } from 'src/app/data/data';
import { StarRatingColor } from 'src/app/shared/star-rating/star-rating.component';
import { formatter } from 'src/app/shared/formatter/format';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() data!: IDataProduct;
  rating:number = 3;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.yellow;
  constructor(private router: Router, private commonService: CommonService) {
  }
  convertToPrice(price: number) {
    return formatter.format(price);
  }
  goToProductDetails(id: string) {
    this.router.navigateByUrl(`/home/product/${id}`);
    this.commonService.setCurrentUrl('shop');
  }
}
