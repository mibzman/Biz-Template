import { Injectable } from "@angular/core";
import { NgxPermissionsService } from "ngx-permissions";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
// import 'rxjs/operators';
// import 'rxjs/add/observable/throw';
import { map } from "rxjs/operators";
// import 'rxjs/add/operator/map'

import { Feature, RoleFlow, Role } from "./";

class Manifest {
	Roles: Role[];
	RoleFlows: RoleFlow[];
}

@Injectable({
	providedIn: "root"
})
export class FeatureService {
	// Manifest: Manifest;

	Features: Map<string, Feature> = new Map<string, Feature>();
	Roles: Map<string, Role> = new Map<string, Role>();
	RoleFlows: Map<string, RoleFlow> = new Map<string, RoleFlow>();

	UsersRoles: string[] = [];

	constructor(private http: Http) {
		this.Setup()
		// this.parseManifest();
		// this.getUsersRoles()
		// this.extractRelleventData();
	}

	private Setup() {
		this.parseManifest().subscribe(result => {
			this.extractRelleventData(result)
			});
	}

	private parseManifest(): Observable<Manifest> {
		return this.http
			.get("assets/feature-manifest.json")
			.pipe(map((val: any) => <Manifest>val.json()))
	}

	private extractRelleventData(Manifest: Manifest) {
		let releventUpgrades = []
		Manifest.RoleFlows.forEach((RoleFlow: RoleFlow) => {
			if (this.UsersRoles.indexOf(RoleFlow.From) >= 0) {
				releventUpgrades.push(RoleFlow.Key)
			}
			this.RoleFlows.set(RoleFlow.To, RoleFlow)
		})

		Manifest.Roles.forEach((Role: Role) => {
			this.Roles.set(Role.Key, Role);
			let canBeUpgraded = (releventUpgrades.indexOf(Role.Key) >= 0)
			Role.Features.forEach((Feature: Feature) => {
				Feature.Role = Role.Key;
				Feature.CanBeUsed = this.UsersRoles[Role.Key] ? true : false;
				Feature.CanBeUpgraded = canBeUpgraded
				this.Features.set(Feature.Key, Feature);
			});
		});
	}

	public canUseFeature(key: string): any { //RoleFlow or bool
		let Feature: Feature = this.Features[key]
		if (Feature.CanBeUsed) {
			return true
		}
		if (!Feature.CanBeUpgraded) {
			return false
		}

		return this.RoleFlows[Feature.Role]
		
	}
}
