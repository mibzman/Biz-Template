import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router'

import { NgxPermissionsModule } from 'ngx-permissions';

import { SideBarComponent } from './side-bar';
import { TopBarComponent } from './top-bar';
import { PermissionWrapperComponent } from './permission-wrapper/permission-wrapper.component';

const COMPONENTS = [
	SideBarComponent,
	TopBarComponent,
	PermissionWrapperComponent
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    NgxPermissionsModule.forChild()
  ],
  exports: [
  	COMPONENTS
  ],
  declarations: [COMPONENTS]
})
export class CoreComponentsModule { }
