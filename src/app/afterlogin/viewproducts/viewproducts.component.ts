import { Component,OnInit} from '@angular/core';
import { AdminseviceService } from 'src/app/admin/adminsevice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit{
  products:any;
  l:any=0;

  constructor(private as:AdminseviceService,private router:Router){}
knc()
{
  this.as.getpdata().subscribe((data:any)=>
  {
    this.products=data;
    this.l=data.length;
  },
  (err)=>
  {
    console.log(err);
  });
}
ngOnInit(): void {
  this.knc();
}
booknow(pname:any,pprice:any)
{
  
this.router.navigate(['/afterlogin/bookproduct',{p:pname,pp:pprice}]);

}
}
