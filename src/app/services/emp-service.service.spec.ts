// import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { EmpServiceService } from './emp-service.service';
import { NgModule } from '@angular/core';

describe('EmpServiceService', () => {
  let service: EmpServiceService;
  let httpCLient:HttpClient
  let httpTestingController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      // @NgModule
      imports:[HttpClientTestingModule],
      // providers:[EmpServiceService]

      
    });
    service = TestBed.inject(EmpServiceService);
    httpCLient=TestBed.inject(HttpClient)
    httpTestingController=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
