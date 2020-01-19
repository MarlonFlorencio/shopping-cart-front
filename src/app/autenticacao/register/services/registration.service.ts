import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Registration } from '..';

@Injectable()
export class RegistrationService {

  private readonly PATH: string = 'auth/registration';

  constructor(private http: HttpClient) { }

  register(registration: Registration): Observable<any> {
      const pp: string = env.baseUrl + this.PATH;
      console.log(pp)
  	  return this.http.post(pp, registration);
  }

}
