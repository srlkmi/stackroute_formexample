import { Component, OnInit } from '@angular/core';
import { MyroutingService } from '../myrouting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rserve : MyroutingService) { }

  ngOnInit(): void {
  }

  
  callLog()
  {
    this.rserve.openLogin();
     
  }
  back()
  {
    this.rserve.goBack();
  }
  callReg()
  {
   this.rserve.openRegister();
  }

}
