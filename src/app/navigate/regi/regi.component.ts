import { Component,OnInit} from '@angular/core';
import { NavigateService } from '../navigate.service';
import { FormGroup ,FormControl } from '@angular/forms';


@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.css']
})
export class RegiComponent implements OnInit {
r:any={
  status:'inactive',
}
constructor(private ns:NavigateService )
{
}
ngOnInit(): void {
  
}
register()
{
this.ns.registernow(this.r).subscribe((data)=>
{
  console.log(data);
  alert("registered succeesfully");
  this.r={
    status:'inactive',
  };
},
(err)=>
{ 
  console.log("sita ");
console.log(err.m);

}  
)
}
}
 
