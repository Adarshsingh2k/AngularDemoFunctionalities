import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpServiceService } from '../../services/emp-service.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  storeRec: any;
  outData: any[] = [];
  outData2: any[] = [];
  outData3: any[] = [];
  
  key: any
  empForm!: FormGroup

  constructor(private service: EmpServiceService) { }

  ngOnInit(): void {

    this.service.getEmployeeData().subscribe(data => this.DataOut(data))
    this.service.getEmployeeData2().subscribe(data => this.DataOut2(data))
    // this.merger(this.outData,this.outData2);

    this.empForm = new FormGroup({
      employee_name: new FormControl('', [Validators.required]),
      employee_salary: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[1-9][0-9]*$')]),
      employee_age: new FormControl('', [Validators.required, this.ageRangeValidator]),

    })

  }


  get employee_name(): any {
    return this.empForm.get('employee_name')
  }
  get employee_salary(): any {
    return this.empForm.get('employee_salary')
  }
  get employee_age(): any {
    return this.empForm.get('employee_age')
  }

  DataOut(data: any) {

    this.storeRec = data
    console.log(this.storeRec)
    // console.log(this.storeRec.data)  
    // this.outData=this.storeRec.data;
    console.log(this.storeRec.data)
    this.storeRec.data.map((item: any) => {
      this.outData.push(item)
    })
    console.log(this.outData)
    this.key = Object.keys(this.outData[0]);
    console.log(this.key)

  }
  DataOut2(data: any) {

    

    data.map((item: any) => this.outData.push(item))
    //  this.key=Object.keys(this.outData[0]);

    console.log(this.outData)



  }



  onSubmit() {
    console.log(this.empForm.value)
    this.service.setEmployeeData(this.empForm.value).subscribe(
      data => {
        console.log(data)
        alert('update successfull')
      }

    )
    this.empForm.reset()

  }

  ageRangeValidator(control: FormControl) {
    if (control.value !== undefined && (control.value < 21 || control.value > 60)) {
      return { ageRangeValidator: true };
    }

    return null;
  }

 


  onChange3(proper: any) {
    console.log(proper)

    console.log(proper.empForm.controls)

    proper.empForm.controls.employee_age.pristine = true

    proper.empForm.controls.employee_age.touched = false


  }

}
