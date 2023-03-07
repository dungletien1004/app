import { Component } from '@angular/core';
import { dataShop } from 'src/app/data/data';

@Component({
  selector: 'app-shop-body',
  templateUrl: './shop-body.component.html',
  styleUrls: ['./shop-body.component.scss']
})
export class ShopBodyComponent {
  datas = [...dataShop];
}
