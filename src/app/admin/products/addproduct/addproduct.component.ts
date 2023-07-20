import { Component } from '@angular/core';
import { AdminseviceService } from '../../adminsevice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  r:any={

  }
  constructor(private as:AdminseviceService){}
  submit()
  {
    this.as.submit(this.r).subscribe((data)=>
    {
      console.log(data);
    },
    (err)=>
    {
      console.log(err);
    }
    )
    this.r={};
  }


}
