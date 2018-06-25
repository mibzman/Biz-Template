import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from './services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
		public authServices: AuthService,
		){
		authServices.HandleAuthentication()
	}
}
