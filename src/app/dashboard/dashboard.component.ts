import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  storeRec:any;
  outData:any;
  constructor(private service:DashboardServiceService) { }

  ngOnInit(): void {
    this.service.getEmployeeRec().subscribe(data=>{
     
        this.DataOut(data)
      }
    )

    // this.DataOut()((
    this.setEmail()
  }

  DataOut(data :any){
    
    this.storeRec=data
        console.table(this.storeRec)
        console.log(this.storeRec.data)  
        this.outData=this.storeRec.data;
        console.log(this.outData[0])
  }

  emailStorage: any;
  
  setEmail(){
    this.emailStorage=sessionStorage.getItem('email')
    console.log(this.emailStorage)
  }
  
}
