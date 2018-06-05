import { Component, OnInit } from '@angular/core';

class Login {
	Username: string;
	Password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hide = true;

	model = new Login();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	
  }

}
