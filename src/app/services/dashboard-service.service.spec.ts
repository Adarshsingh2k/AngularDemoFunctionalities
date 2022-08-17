import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DashboardServiceService', () => {
  let service: DashboardServiceService;
  let httpCLient:HttpClient
  let httpTestingController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]

    });
    service = TestBed.inject(DashboardServiceService);
    httpCLient=TestBed.inject(HttpClient)
    httpTestingController=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
