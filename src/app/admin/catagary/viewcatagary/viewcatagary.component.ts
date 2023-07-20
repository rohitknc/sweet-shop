import { Component, importProvidersFrom } from '@angular/core';
import { OnInit } from '@angular/core';
import { AdminseviceService } from '../../adminsevice.service';
@Component({
  selector: 'app-viewcatagary',
  templateUrl: './viewcatagary.component.html',
  styleUrls: ['./viewcatagary.component.css']
})
export class ViewcatagaryComponent implements OnInit {
  catag:any;
  l:any;
  ka:any={

  }
  constructor(private as:AdminseviceService ){}
  knc()
  {
    this.as.getdata().subscribe((data:any)=>
    {
      this.catag=data;
      this.l=data.length;
    },
    (err)=>
    {
      console.log(err);
    })
  }
  ngOnInit(): void {
    this.knc();
  }
delete(k:any)
{
this.ka.k=k;
this.as.delete(this.ka).subscribe((data)=>
{
  console.log(data);
},
(err)=>
{
  console.log(err);
})
this.knc();
}
}


