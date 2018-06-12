import { Component, OnInit } from '@angular/core';

class Signup {
	Username: string;
	Password: string;
	Confirm: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	hide = true;

	model = new Signup();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  	console.log(this.model)
  }

}
