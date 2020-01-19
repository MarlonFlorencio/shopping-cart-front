import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpUtilService {

  constructor() { }

  headers() {
  	let httpHeaders: HttpHeaders = new HttpHeaders();
	
  	if (localStorage['token']) {
  	  httpHeaders = httpHeaders.set(
  	  	'Authorization', 'Bearer ' + localStorage['token']
  	  );
  	}
    
    return { headers: httpHeaders };
  }
}







