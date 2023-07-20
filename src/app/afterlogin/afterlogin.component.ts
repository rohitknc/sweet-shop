import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminseviceService } from '../admin/adminsevice.service';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent {
constructor(private ar:ActivatedRoute,private as:AdminseviceService){}
lk()
{
 this.as.logout().subscribe((data:any)=>
 {
       console.log("logged out");
 })
}
}
