import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataShop, IDataProduct } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  datas = [...dataShop];
  id: string = '';
  dataNow!: IDataProduct;
  constructor(private commonService: CommonService, private router: Router) {
    this.id = router.url.split('/').pop() || '';
  }
  ngOnInit(): void {
    const index = this.datas.findIndex(data => data.id = this.id);
    this.dataNow = this.datas[index];
  }
}
