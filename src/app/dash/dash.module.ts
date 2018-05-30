import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CoreComponentsModule } from '../core-components';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash.component';

import { DashRoutingModule} from './dash-routing.module'


@NgModule({
  imports: [
    SharedModule,
    CoreComponentsModule,
    DashRoutingModule,
  ],
  declarations: [HomeComponent, DashComponent]
})
export class DashModule { }
