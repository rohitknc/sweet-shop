import { Component,OnInit} from '@angular/core';
import { AdminseviceService } from 'src/app/admin/adminsevice.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private as:AdminseviceService,
    private r:Router){}
 d:any={};
 ed:any={};
 n:any="/assets/picon.png";
 method1()
 {
  this.as.click1().subscribe((data:any)=>
  { 
    console.log(data.data);
    if(data.data==undefined)
    {
      this.r.navigate(['/navigate/login']);
    }
    if(data.submit==true)
    {
       this.d=data.data;
       if(this.d.image)
         this.n="http://localhost:3010/"+this.d.image;
    }
    else{
      alert('user already in exist ');
      this.r.navigate(['/navigate/login']);
    }
  },
  (err)=>
  {
    
  })
 }
  ngOnInit(): void {
   this.method1();
  }
knc()
{
  let ele=document.getElementsByClassName("form")[0];
  console.log(ele);
  ele.setAttribute("class","form1");
}
knc1()
{
  this.as.edit(this.ed).subscribe((data:any)=>
  {
     if(data.submit==true)
     {
      
      this.method1();
     }
     else
     {
      console.log(data);
     }
  })
  let ele=document.getElementsByClassName("form1")[0];
  console.log(ele);
  ele.setAttribute("class","form");
 
}
plk(j:any)
{
 
 let file=j.target.files[0];
 console.log(file);
 let fdata=new FormData();
 fdata.append('image',file);
 fdata.append("email",this.d.email);
this.as.upload(fdata).subscribe((data:any)=>
{
  if(data.submit==true)
  {
    alert("submitted successfully");
    this.n="http://localhost:3010/"+data.iamge;
 
  }
  else
  {
    alert("there is an error");
  }
})
}
}
