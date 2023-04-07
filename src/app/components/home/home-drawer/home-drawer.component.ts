import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataShop } from 'src/app/data/data';
import { CommonService } from 'src/app/services/common.service';
interface IItemMenu {
  name: string
  icon: string
  active: boolean
  link: string
}
@Component({
  selector: 'app-home-drawer',
  templateUrl: './home-drawer.component.html',
  styleUrls: ['./home-drawer.component.scss']
})
export class HomeDrawerComponent implements OnInit {
  items: IItemMenu[] = [
    {
      name: 'Shop',
      icon: 'store',
      active: true,
      link: '/home/shop'
    },
    {
      name: 'Cart',
      icon: 'shopping_cart',
      active: false,
      link: '/home/cart'
    },
    {
      name: 'My Profile',
      icon: 'person',
      active: false,
      link: '/home/profile'
    }
  ]
  isShow = false;
  constructor(private commonService: CommonService, private router: Router){
    const routers = this.router.url.split('/');
    const routerNow = this.router.url.split('/').pop();
    routerNow &&  this.commonService.setCurrentUrl(routers.length === 3 ? routerNow : 'shop')
  }
  ngOnInit(): void {
    this.commonService.currentUrl$.subscribe(url => {
      const newItems = this.items.map(item => {
        if (item.link.split('/').pop() === url) {
          return {
            ...item,
            active: true
          }
        }
        return {
          ...item,
          active: false
        }
      })
      this.items = newItems;
    })
  }
  handleClickItem = (_item: IItemMenu) => {
    const newItems = this.items.map(item => {
      if (item.name === _item.name) {
        this.commonService.setCurrentUrl(item.name);
        return {
          ...item,
          active: true
        }
      }
      return {
        ...item,
        active: false
      }
    })
    this.items = newItems;
  }
}
