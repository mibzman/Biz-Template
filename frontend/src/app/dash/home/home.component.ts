import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./../../services";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	constructor(private authSer: AuthService, public router: Router) {}

	ngOnInit() {}

	Logout() {
		console.log("hit logout");
		this.authSer.Logout();
		// this.router.navigate(["/callback"])
	}
}
