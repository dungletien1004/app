import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  constructor(private router: Router, private commonService: CommonService) {}

  goToProfile() {
    this.router.navigateByUrl('/home/profile');
    this.commonService.setCurrentUrl('profile');
  }
  goToShop() {
    this.router.navigateByUrl('/home/shop');
    this.commonService.setCurrentUrl('shop');
  }
}
