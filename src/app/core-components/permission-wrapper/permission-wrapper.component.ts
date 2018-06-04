import { Component, OnInit, Input } from '@angular/core';

import { FeatureService } from '../../services'
import { RoleFlow, PermissionState } from '../../services/feature'

@Component({
  selector: 'permission-wrapper',
  templateUrl: './permission-wrapper.component.html',
  styleUrls: ['./permission-wrapper.component.css']
})
export class PermissionWrapperComponent implements OnInit {

	@Input() Feature: string
	@Input() UpgradeText: string

	State: PermissionState = PermissionState.Show

	ButtonText

	Upgrade: RoleFlow;

  constructor(
  	private featureSer: FeatureService
  	) { }

  ngOnInit() {
  	console.log(this.Feature)
  	let result = this.featureSer.canUseFeature(this.Feature)
  	// if (result == true){
  	// 	this.State = PermissionState.Show
  	// } else if (result == false) {
  	// 	this.State = PermissionState.Hide
  	// } else {
  	// 	this.Upgrade = result
  	// 	console.log(result)
  	// 	this.State = PermissionState.Guard
  	// }

  	this.State = result.result
  	this.Upgrade = result.upgrade
  	
  	if (this.UpgradeText) {
  		this.ButtonText = this.UpgradeText
  	} else if (this.State == PermissionState.Guard){
  		this.ButtonText = this.Upgrade.Title
  	}
  }

}
