import { Component,OnInit } from '@angular/core';
import { AdminseviceService } from '../adminsevice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  d:any={};
  constructor(private as:AdminseviceService)
  {

  }
  ngOnInit(): void {
   this.as.getdash().subscribe((data:any)=>
   {
    console.log(data);
    this.d=data;
   })
  }

}
