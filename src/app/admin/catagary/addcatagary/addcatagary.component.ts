import { Component } from '@angular/core';
import { AdminseviceService } from '../../adminsevice.service';
@Component({
  selector: 'app-addcatagary',
  templateUrl: './addcatagary.component.html',
  styleUrls: ['./addcatagary.component.css']
})
export class AddcatagaryComponent {
cata:any={

};
constructor(private as:AdminseviceService){}
submitcat()
{
this.as.submitcat(this.cata).subscribe((data)=>
{
  console.log(data);
},
(err)=>
{
  console.log(err);
})
this.cata={};
}
}
