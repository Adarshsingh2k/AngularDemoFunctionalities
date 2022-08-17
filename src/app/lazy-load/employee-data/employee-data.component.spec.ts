import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';
// import { EmpServiceService } from 'src/app/services/emp-service.service';

import { EmployeeDataComponent } from './employee-data.component';

describe('EmployeeDataComponent', () => {
  let component: EmployeeDataComponent;
  let fixture: ComponentFixture<EmployeeDataComponent>;
  let httpCLient: HttpClient
  let httpTestingController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDataComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      // providers:[EmpServiceService]
    })
      .compileComponents();
    httpCLient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)


    fixture = TestBed.createComponent(EmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // const h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('test Form group element count', () => {


    const formEl = fixture.debugElement.nativeElement.querySelector('form')
    // console.log(formEl)

    // console.log("ff")

    const inputEl = formEl.querySelectorAll('input')
    // console.log(inputEl)
    // console.log(inputEl.length+'f')

    expect(inputEl.length).toEqual(3)
  })


  it('age field validity', () => {
    let errors = {};

    let age = component.empForm.controls['employee_age'];
    errors = age.errors || {};
    expect(errors).toBeTruthy();
  });

});
