import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }
  /*send data to node application */
  send_data(cont_data : cont_data)
  {
    return this.http.post(environment.apiBaseUrl+'/register',cont_data);
  }
}
