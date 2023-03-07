import { Component } from '@angular/core';
interface IGender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss']
})
export class HomeProfileComponent {
  date: string = '';
  selected = '0';
  genders: IGender[] = [
    {value: '0', viewValue: 'Male'},
    {value: '1', viewValue: 'Female'},
    {value: '2', viewValue: 'Other'},
  ];
}
