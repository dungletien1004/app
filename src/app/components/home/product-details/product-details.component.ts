import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataShop, IDataProduct } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
import { formatter } from 'src/app/shared/formatter/format';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  datas = [...dataShop];
  id: string = '';
  dataNow!: IDataProduct;
  mainImg!: string;
  cartLength!: number;
  constructor(private commonService: CommonService, private router: Router) {
    this.id = router.url.split('/').pop() || '';
  }

  goToCart() {
    this.router.navigateByUrl('/home/cart');
    this.commonService.setCurrentUrl('cart');
  }
  ngOnInit(): void {
    const index = this.datas.findIndex(data => data.id === this.id);
    this.dataNow = this.datas[index];
    this.mainImg = this.dataNow.img[0];
    this.commonService.length$.subscribe(data => this.cartLength = data);
  }

  convertToPrice(price: number) {
    return formatter.format(price);
  }
  onClickChildImg(_img: string) {
    this.mainImg = _img;
  }
  addItemToCart() {
    this.commonService.addItemToCart(this.dataNow);
  }
}
