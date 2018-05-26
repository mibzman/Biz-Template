import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

	@Output() SideBar = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

}
