import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SideBarComponent } from './side-bar';
import { TopBarComponent } from './top-bar';

const COMPONENTS = [
	SideBarComponent,
	TopBarComponent,
]

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
  	COMPONENTS
  ],
  declarations: [COMPONENTS]
})
export class CoreComponentsModule { }
