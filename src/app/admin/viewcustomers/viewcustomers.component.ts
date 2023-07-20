import { Component,OnInit} from '@angular/core';
import { AdminseviceService } from '../adminsevice.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent implements OnInit {
  data:any;
  l:any=0;
 constructor(private as:AdminseviceService){}
  ngOnInit(): void {
    this.as.getcust().subscribe((data:any)=>
    {
        this.data=data.result;
        this.l=data.result.length;
    })
  }
}
