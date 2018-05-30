import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FeatureService } from './services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private featureSer: FeatureService){
	}
}
