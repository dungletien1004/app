import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public currentUrl$ = new BehaviorSubject<string>('shop');
  constructor() { }

  setCurrentUrl(url: string) {
    this.currentUrl$.next(url);
  }
}
