import { Component, OnInit } from '@angular/core';
import { dataShop, IDataProduct } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
import { IFilter } from 'src/app/shared/interface/type';

@Component({
  selector: 'app-shop-body',
  templateUrl: './shop-body.component.html',
  styleUrls: ['./shop-body.component.scss']
})
export class ShopBodyComponent implements OnInit {
  datas = [...dataShop];
  curFilter!:IFilter;
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.commonService.fillter$.subscribe(data => {
      this.curFilter = data;
      this.setDataRender();
    })
  }
  setDataRender() {
    const newData = [...dataShop]
    const dataSearch = newData.filter((item: IDataProduct) => item.name ? item.name.toLowerCase().includes(this.curFilter.search.toLowerCase()) : '');
    let priceFrom = Number(this.curFilter.price.from);
    let priceTo = Number(this.curFilter.price.to);
    (priceFrom > priceTo) && ([priceFrom, priceTo] = [priceTo, priceFrom]);
    const dataPrice = priceFrom != - 1
                      ? dataSearch.filter(item => (item.price >= priceFrom && item.price <= priceTo))
                      : dataSearch.filter(item => item.price >= priceTo);
    let rateFrom = Number(this.curFilter.rate.from);
    let rateTo = Number(this.curFilter.rate.to);
    (rateFrom > rateTo) && ([rateFrom, rateTo] = [rateTo, rateFrom]);
    const dataRate = dataPrice.filter(item => (item.rating >= rateFrom && item.rating <= rateTo))
    this.datas = dataRate;
  }
}
