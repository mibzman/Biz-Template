import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { AuthService } from '../../services'

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

  constructor(
    private authSer: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit")
  	this.authSer.Login(this.model.Username, this.model.Password)
    if (this.authSer.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

}
