import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminseviceService } from 'src/app/admin/adminsevice.service';
@Component({
  selector: 'app-bookproduct',
  templateUrl: './bookproduct.component.html',
  styleUrls: ['./bookproduct.component.css']
})
export class BookproductComponent implements OnInit {
  constructor(private ar:ActivatedRoute,
    private as:AdminseviceService
    )
    {}
  pname:any;
  pprice:any;
  r:any={
  };
  ngOnInit(): void {
    this.ar.paramMap.subscribe((data)=>
    {
      this.pname=data.get('p');
      this.pprice=data.get('pp');
    })
  }
  submit2(){
    this.r.pname=this.pname;
    this.r.pprice=this.pprice;
    this.as.submit2(this.r).subscribe((data)=>
    {
      console.log(data);
    })
    this.r={};
    this.pname="";
    this.pprice="";
    alert("order placed succeesfully");
  }
}
