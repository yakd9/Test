import { Component, OnInit } from '@angular/core';


@Component({

  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class  implements OnInit {
  
  sideBarOpen=true;
  constructor() { 
    console.log('DefaultComponent--->');
  }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
