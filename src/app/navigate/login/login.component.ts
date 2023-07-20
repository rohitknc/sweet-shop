import { Component } from '@angular/core';
import { NavigateService } from '../navigate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
r:any={

}
j:any;
constructor(private ns:NavigateService ,private r1:Router)
{
}
login()
{
this.ns.login(this.r).subscribe((data)=>
{
  console.log(data);
  if(data.ms=="not correct")
  {
    alert("incorrect details");
  }
  else{
  this.r1.navigate(['/afterlogin/profile']);
  alert("login successfully");
  }
},
(err)=>{
    console.log(err);
  }
)
}
}
