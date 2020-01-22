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
  private readonly PATH_DRAFTED_CART: string = 'draftedCart';
  private readonly PATH_CLOSED_CARTS: string = 'closedCarts';
  private readonly PATH_ADD_ITEM = '/add-item/{itemId}';
  private readonly PATH_ADD_ONE_ITEM = '/add-one-item/{itemId}';
  private readonly PATH_REMOVE_ITEM = '/remove-item/{itemId}';
  private readonly PATH_REMOVE_ONE_ITEM = '/remove-one-item/{itemId}';

  constructor(
  	private http: HttpClient,
    private httpUtil: HttpUtilService) { }
    
  addItem(itemId: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_ADD_ITEM.replace('{itemId}', itemId);

    return this.http.post(url, null, this.httpUtil.headers());
  }

  addOneItem(itemId: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_ADD_ONE_ITEM.replace('{itemId}', itemId);

    return this.http.post(url, null, this.httpUtil.headers());
  }

  removeItem(itemId: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_REMOVE_ITEM.replace('{itemId}', itemId);

    return this.http.post(url, null, this.httpUtil.headers());
  }

  removeOneItem(itemId: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_REMOVE_ONE_ITEM.replace('{itemId}', itemId);

    return this.http.post(url, null, this.httpUtil.headers());
  }

  closeCart(): Observable<any> {
    const url: string = `${env.baseApiUrl}${this.PATH}/${this.PATH_CLOSE}`;
    return this.http.post(
      url,
      null,
      this.httpUtil.headers()
    );
  }

  getClosedCarts(
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

  getDraftedCart(): Observable<any> {
    const url: string = `${env.baseApiUrl}${this.PATH}/${this.PATH_DRAFTED_CART}`;
    return this.http.get(
      url,
      this.httpUtil.headers()
    );
  }

  findById(cartId: string): Observable<any> {
    const url: string = `${env.baseApiUrl}${this.PATH}/${cartId}`;
    return this.http.get(
        url,
        this.httpUtil.headers()
    );
  }

}
