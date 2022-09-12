import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginRequest } from 'app/stateMangement/login.actions';
import { loginState } from 'app/stateMangement/login.state';
import { AuthLogicService } from '../services/auth-logic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router,
     private authService: AuthLogicService,
     private store:Store<{email:loginState}>
     ) { }

  ngOnInit(): void {
  }

  onSubmit(logIn: any) {
    console.log(logIn)
    console.log(logIn.value.email);
    sessionStorage.setItem('email', logIn.value.email)
    this.store.dispatch(loginRequest({email:logIn.value.email,password:logIn.value.pass}))
    sessionStorage.setItem('password', logIn.value.pass)

    // this.goToDashboard
    this.router.navigate(['dashboard'], { relativeTo: this.route })

    this.authService.login(logIn.value.email, logIn.value.pass);
  }


  onChange(proper: any) {
    console.log(proper)

    console.log(proper.control)

    //  proper.control.pristine=true

    proper.control.touched = false


  }



  onChange2(proper: any) {
    console.log(proper)

    console.log(proper.control)

    proper.control.pristine = true

    proper.control.touched = false



  }
}
