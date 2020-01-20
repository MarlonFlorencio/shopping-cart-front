import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly PATH: string = 'cart';
  private readonly PATH_CLOSE: string = 'close';
  private readonly PATH_CLOSED_CARTS: string = 'findClosedCarts';
  private readonly PATH_ADD_ITEM = '/add-item/{itemId}';

  constructor(
  	private http: HttpClient,
    private httpUtil: HttpUtilService) { }
    
  addItem(itemId: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_ADD_ITEM.replace('{itemId}', itemId);

    return this.http.post(url, null, this.httpUtil.headers());
  }

  closeCart(): Observable<any> {
    return this.http.post(
      env.baseApiUrl + this.PATH + this.PATH_CLOSE,
      null,
      this.httpUtil.headers()
    );
  }

  findClosedCarts(
    page: number, 
    pageSize: number,
    propertyOrder: string, 
    direction: string): Observable<any> {

    const url: string = `${env.baseApiUrl}${this.PATH}/${this.PATH_CLOSED_CARTS}`;

    const params: string = 
      '?page=' + page +
      '&pageSize=' + pageSize +
      '&propertyOrder=' + propertyOrder + 
      '&direction=' + direction;
    return this.http.get(url + params, this.httpUtil.headers());
  }

  findById(cartId: string): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + '/' + cartId,
        this.httpUtil.headers()
    );
  }

}
