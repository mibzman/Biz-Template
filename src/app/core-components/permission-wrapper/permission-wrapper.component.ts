import { Component, OnInit, Input } from '@angular/core';

import { FeatureService } from '../../services'
import { RoleFlow } from '../../services/feature'

enum ComponentState {
  Show = 0,
  Hide,
  Guard
}

@Component({
  selector: 'permission-wrapper',
  templateUrl: './permission-wrapper.component.html',
  styleUrls: ['./permission-wrapper.component.css']
})
export class PermissionWrapperComponent implements OnInit {

	@Input() Feature: string

	State: ComponentState = ComponentState.Show

	Upgrade: RoleFlow;

  constructor(
  	private featureSer: FeatureService
  	) { }

  ngOnInit() {
  	console.log(this.Feature)
  	let result = this.featureSer.canUseFeature(this.Feature)
  	if (result == true){
  		this.State = ComponentState.Show
  	} else if (result == false) {
  		this.State = ComponentState.Hide
  	} else {
  		this.Upgrade = result
  		console.log(result)
  		this.State = ComponentState.Guard
  	}
  }

}
