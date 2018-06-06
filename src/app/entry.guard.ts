import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router
} from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./services";

@Injectable({
	providedIn: "root"
})
export class EntryGuard implements CanActivate {
	constructor(
		private authSer: AuthService,
		private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		let isLoggedIn = this.authSer.isLoggedIn
		// console.log("guard:", )
		// debugger
		if (!this.authSer.isLoggedIn) {
			// console.log("guard:", "redirecting")
			this.router.navigate(["/login"])
			return false	
		} else {
			return true
		}
		
	}
}
