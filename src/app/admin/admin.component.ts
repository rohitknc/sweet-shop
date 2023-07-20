import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  knc=false;
  knc1=false;
 clicked1()
{
  this.knc=!this.knc;  
}
clicked2()
{
  this.knc1=!this.knc1;  
} 
}
