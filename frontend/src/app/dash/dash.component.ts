import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../services'


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

	title = 'app';
	events: string[] = [];
	opened: boolean;

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
  }

}
