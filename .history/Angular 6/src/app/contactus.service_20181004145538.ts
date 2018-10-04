import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }
  /*send data to node application */
  send_data(data : data)
  {
    return this.http.post(environment.apiBaseUrl+'/register',data,this.noAuthHeader);
  }
}
