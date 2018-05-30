import { Component, OnInit } from '@angular/core';

import { FeatureService } from '../../services'

@Component({
  selector: 'permission-wrapper',
  templateUrl: './permission-wrapper.component.html',
  styleUrls: ['./permission-wrapper.component.css']
})
export class PermissionWrapperComponent implements OnInit {

  constructor(private featureSer: FeatureService) { }

  ngOnInit() {
  }

}
