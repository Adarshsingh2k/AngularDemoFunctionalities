import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLogicService {

  constructor() { }
  loggedIn:boolean=false;

  email:string='admin@xyz.com'
  pass:string='check123'

  login(email:string,pass:string){
    if(this.email==email && this.pass==pass){
    this.loggedIn=true;
    console.log('pass');

    }
    else{
      this.loggedIn=false;
      console.log('fail');
      alert('please enter correct Password')

      
    }
  }
 

  isAuthenticated(){
    return this.loggedIn
  }
}
