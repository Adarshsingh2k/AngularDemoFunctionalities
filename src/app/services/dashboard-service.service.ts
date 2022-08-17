import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private httpClient: HttpClient) { }
  getEmployeeRec(){
    return this.httpClient.get('https://reqres.in/api/users?page=2')
  }
}
