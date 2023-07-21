import { Component, OnInit } from '@angular/core';

import { AdminseviceService } from 'src/app/admin/adminsevice.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {
  constructor(
    private as: AdminseviceService
  ) {

  }
  data: any;
  ngOnInit(): void {
    this.as.getview().subscribe((data: any) => {
      this.data = data;
      let i;
      for(i of this.data)
      {
        let k=i.quantity;
        k=+k;
        let n=i.pprice;
        n=+n;
        i.pprice=k*n;

      }
    })

  }
  open() {
    let k = document.getElementById("kj");
    k?.setAttribute("class", "open1");
  }
  knc(n: any) {
    let m: any = document.getElementsByTagName("label");
    let i: any;
    for (i = 0; i < n; i++) {
      m[i].classList.add("checked");
    }
    setTimeout(() => {
      let k = document.getElementById("kj");
      k?.setAttribute("class", "open");
      alert("Thank you");
    }, 500);
    setTimeout(() => {
      for (i = 0; i < n; i++) {
        m[i].classList.remove("checked");
      }
    }, 1000);


  }
}
