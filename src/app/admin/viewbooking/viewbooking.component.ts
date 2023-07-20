import { Component ,OnInit} from '@angular/core';
import { AdminseviceService } from '../adminsevice.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit{
  d:any;
  l:any=0;
  constructor(
    private as:AdminseviceService
  )
  {

  }
  kncpk()
  {
    this.as.getproducts().subscribe((data:any)=>
    {
       this.d=data.result;
       console.log(this.d)
       this.l=data.result.length;
    })
  }
 ngOnInit(): void {
   this.kncpk();
 }
 pk(k:any,l:any)
 {
  let v:any={
    m:k,
    x:l
  }
  this.as.passdata(v).subscribe((data)=>
  {
    this.kncpk();
  })
 }
}
