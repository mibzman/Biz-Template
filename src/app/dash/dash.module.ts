import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, DashComponent]
})
export class DashModule { }
