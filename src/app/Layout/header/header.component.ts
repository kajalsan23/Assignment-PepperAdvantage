import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isShow = false;
  constructor(public router:Router) { }
 
  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    console.log("inside")
    this.isShow = !this.isShow;

  }
  backtoPage(){
    this.router.navigate(['/login']);
  }

}
