import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, DataService } from "./../../services";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	DataResult: any = {
					"Data": "Not Loaded",
					"MoreData": "Not Loaded"
				}

	constructor(
		private authSer: AuthService,
		public router: Router,
		private dataSer: DataService
	) {
		//try changing the value passed to this function
		dataSer.GetData("Thing One").subscribe(result => {
			this.DataResult = result
		}, err => {
			console.log("an error occured:", err)
			this.DataResult = {
					"Data": "Failed to get value",
					"MoreData": "Failed to get value"
				}
		})
	}

	ngOnInit() {}

	Logout() {
		console.log("hit logout");
		this.authSer.Logout();
		// this.router.navigate(["/callback"])
	}
}
