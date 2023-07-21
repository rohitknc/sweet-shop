import { Component,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminseviceService } from '../admin/adminsevice.service';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent {
constructor(private ar:ActivatedRoute,private as:AdminseviceService){}
ngOnDestroy():void
{
   this.as.destroy().subscribe((data:any)=>
   {
    
   })
}
lk()
{
 this.as.logout().subscribe((data:any)=>
 {
       console.log("logged out");
 })
}
}
