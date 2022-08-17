import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLogicService } from '../services/auth-logic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router, private authService:AuthLogicService) { }

  ngOnInit(): void {
  }

  onSubmit(logIn:any){
    console.log(logIn)
    console.log(logIn.value.email);
    sessionStorage.setItem('email',logIn.value.email)
    sessionStorage.setItem('password',logIn.value.pass)
    
    // this.goToDashboard
    this.router.navigate(['dashboard'], {relativeTo:this.route})

    this.authService.login(logIn.value.email,logIn.value.pass);
  }

  
  onChange(proper:any){
    console.log(proper)
    
    console.log(proper.control)
    
  //  proper.control.pristine=true

   proper.control.touched=false
   

  }

  setTouch:boolean=true

  onChange2(proper:any){
    console.log(proper)
    
    console.log(proper.control)
    
   proper.control.pristine=true

   proper.control.touched=false

   

  }
}
