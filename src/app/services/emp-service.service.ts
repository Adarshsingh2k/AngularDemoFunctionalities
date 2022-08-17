import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeData() {
    return this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees')
  }


  setEmployeeData(dataIn: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/employees', dataIn, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    // alert('data updated')
  }

  getEmployeeData2() {
    return this.httpClient.get('http://localhost:3000/employees')
  }
}
