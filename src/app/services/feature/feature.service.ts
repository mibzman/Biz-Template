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

const Manifest = {
	"Roles": [
		{
			"Key": "GUEST",
			"Title": "Guest",
			"Features": [
				{
					"Key": "home-card",
					"Title": "Home Card",
					"URL": "/",
					"Description": "the card reading 'sample card' on the home screen"
				}
			]
		},
		{
			"Key": "SUPER",
			"Title": "Super User",
			"Features": [
				{
					"Key": "super-home-card",
					"Title": "Super Home Card",
					"URL": "/",
					"Description": "the card reading 'Super sample card™' on the home screen"
				}
			]
		}
	],
	"RoleFlows": [
		{
			"Key": "promote",
			"Title": "Become a SuperUser",
			"From": "GUEST",
			"To": "SUPER",
			"URL": "/promotion"
		}
	]
}



// class Manifest {
// 	Roles: Role[];
// 	RoleFlows: RoleFlow[];
// }

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
		this.UsersRoles.push("GUEST")
		// this.UsersRoles.push("SUPER")

		this.extractRelleventData(Manifest)
	}

	private extractRelleventData(Manifest) {
		// debugger
		let releventUpgrades = []
		Manifest.RoleFlows.forEach((RoleFlow: RoleFlow) => {
			// debugger
			let roleIndex = this.UsersRoles.indexOf(RoleFlow.From)
			if (roleIndex >= 0) {
				// debugger
				releventUpgrades.push(RoleFlow.To)
			}
			this.RoleFlows.set(RoleFlow.To, RoleFlow)
		})


		// debugger
		Manifest.Roles.forEach((Role: Role) => {
			if (Role.Key=="SUPER"){
				// debugger
			}
			let canBeUpgraded = (releventUpgrades.indexOf(Role.Key) >= 0)
			Role.Features.forEach((Feature: Feature) => {
				Feature.Role = Role.Key;
				Feature.CanBeUsed =  this.UsersRoles.indexOf(Role.Key) >= 0 ? true : false;
				Feature.CanBeUpgraded = canBeUpgraded
				this.Features.set(Feature.Key, Feature);
			});
			this.Roles.set(Role.Key, Role);
		});
	}

	public canUseFeature(key: string): any { //RoleFlow or bool
		// debugger;
		let Feature: Feature = this.Features.get(key)
		if (Feature.CanBeUsed) {
			return true
		}
		if (!Feature.CanBeUpgraded) {
			return false
		}

		return this.RoleFlows.get(Feature.Role)
		
	}
}
