import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginState } from 'app/stateMangement/login.state';
import { Observable } from 'rxjs';
import { DashboardServiceService } from '../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  storeRec:any;
  outData:any;
  email$!:Observable<{email:string}>
  constructor(private service:DashboardServiceService,
    private store:Store<{email:loginState}>) { }

  ngOnInit(): void {
    this.service.getEmployeeRec().subscribe(data=>{
     
        this.DataOut(data)
      }
    )

    // this.DataOut()((
    // this.setEmail()
    this.email$=this.store.select('email')
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
