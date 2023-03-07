import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
export class HomeDrawerComponent {
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
  constructor(private router: Router){
      const routerNow = router.url.split('/').pop();
      const newItems = this.items.map(item => {
        if (item.link.split('/').pop() === routerNow) {
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

  handleClickItem = (_item: IItemMenu) => {
    const newItems = this.items.map(item => {
      if (item.name === _item.name) {
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
