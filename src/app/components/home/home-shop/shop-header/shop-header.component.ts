import { Component } from '@angular/core';
interface ISelectItem {
  value: string;
  viewValue: string;
}
interface ISelected {
  from: string;
  to: string;
}
@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent {
  isOpen = false;
  priceSelect: ISelected = {
    from: '0',
    to: '5.000.000'
  }
  ratingSelect: ISelected = {
    from: '0',
    to: '5'
  }
  prices: ISelectItem[] = [
    {value: '0', viewValue: '0 VNĐ'},
    {value: '2.000.000', viewValue: '2 000 000 VNĐ'},
    {value: '5.000.000', viewValue: '5 000 000 VNĐ'},
    {value: '10.000.000', viewValue: '10 000 000 VNĐ'},
    {value: '50.000.000', viewValue: '50 000 000 VNĐ'},
  ];
  ratings: ISelectItem[] = [
    {value: '0', viewValue: '0 Sao'},
    {value: '1', viewValue: '1 Sao'},
    {value: '2', viewValue: '2 Sao'},
    {value: '3', viewValue: '3 Sao'},
    {value: '4', viewValue: '4 Sao'},
    {value: '5', viewValue: '5 Sao'},
  ];
}
