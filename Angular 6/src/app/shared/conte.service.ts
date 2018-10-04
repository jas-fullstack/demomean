import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConteService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }
  send_email_and_save(contect_data)
  {
    return this.http.post(environment.apiBaseUrl+'/register',contect_data,this.noAuthHeader);
  }
}
