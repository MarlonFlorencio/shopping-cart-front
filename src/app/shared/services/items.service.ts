import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

import { Item } from '../models';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly ADMIN: string = 'admin';
  private readonly PATH: string = 'item';
  private readonly PATH_FIND_BY_NAME = '/findByName/{name}';

  constructor(
  	private http: HttpClient,
    private httpUtil: HttpUtilService) { }
    
  create(item: Item): Observable<any> {
    return this.http.post(
      `${env.baseApiUrl}${this.ADMIN}/${this.PATH}`, 
      item,
      this.httpUtil.headers()
    );
  }

  remove(itemId: string): Observable<any> {
    return this.http.delete(
      `${env.baseApiUrl}${this.ADMIN}/${this.PATH}/${itemId}`,
      this.httpUtil.headers()
    );
  }

  update(item: Item): Observable<any> {
    return this.http.put(
      `${env.baseApiUrl}${this.ADMIN}/${this.PATH}`,
      item,
      this.httpUtil.headers()
    );
  }

  findAll(
    page: number, 
    pageSize: number,
    propertyOrder: string, 
    direction: string): Observable<any> {

    const url: string = `${env.baseApiUrl}${this.PATH}`;

    const params: string = 
      '?page=' + page +
      '&pageSize=' + pageSize +
      '&propertyOrder=' + propertyOrder + 
      '&direction=' + direction;

      console.log('findAll' + params);

    return this.http.get(url + params, this.httpUtil.headers());
  }
  
  findByName(
    name: string,
    page: number, 
    pageSize: number,
    propertyOrder: string, 
    direction: string): Observable<any> {

    const url: string = env.baseApiUrl + this.PATH + 
      this.PATH_FIND_BY_NAME.replace('{name}', name);
  
    const params: string = 
      '?page=' + page +
      '&pageSize=' + pageSize +
      '&propertyOrder=' + propertyOrder + 
      '&direction=' + direction;

      console.log('findByName' + params);
  
    return this.http.get(url + params, this.httpUtil.headers());
  }

  findById(itemId: string): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + '/' + itemId,
        this.httpUtil.headers()
    );
  }

}
