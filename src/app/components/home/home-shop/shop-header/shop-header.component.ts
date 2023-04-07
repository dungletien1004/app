import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { IFilter, initFilter, IRange } from 'src/app/shared/interface/type';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
interface ISelectItem {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  isOpen = false;
  priceSelect: IRange = {
    from: '0',
    to: '5.000.000'
  }
  ratingSelect: IRange = {
    from: '0',
    to: '5'
  }
  filter!: IFilter;
  prices: ISelectItem[] = [
    {value: '0', viewValue: '0 VNĐ'},
    {value: '2000000', viewValue: '2 000 000 VNĐ'},
    {value: '5000000', viewValue: '5 000 000 VNĐ'},
    {value: '10000000', viewValue: '10 000 000 VNĐ'},
    {value: '50000000', viewValue: '50 000 000 VNĐ'},
    {value: '-1', viewValue: 'Tất cả'},
  ];
  ratings: ISelectItem[] = [
    {value: '0', viewValue: '0 Sao'},
    {value: '1', viewValue: '1 Sao'},
    {value: '2', viewValue: '2 Sao'},
    {value: '3', viewValue: '3 Sao'},
    {value: '4', viewValue: '4 Sao'},
    {value: '5', viewValue: '5 Sao'},
  ];
  private searchTextChanged = new Subject<string>();
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.commonService.fillter$.subscribe(data => this.filter = data);
    this.searchTextChanged.pipe(
      debounceTime(500) // Trì hoãn 500ms trước khi xử lý sự kiện
    ).subscribe(() => {
      this.commonService.setFilter(this.filter);
    });
  }
  changeSearch() {
    this.searchTextChanged.next(this.filter.search);
  }
  submitFilter() {
    this.commonService.setFilter(this.filter);
  }
  clearFilter() {
    this.commonService.setFilter({
      price: {
          from: '0',
          to: '10000000000000000'
      },
      rate: {
          from: '0',
          to: '5'
      },
      search: this.filter.search
    })
  }
}
