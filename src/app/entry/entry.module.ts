import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';

import { EntryRoutingModule } from './entry-routing.module'

@NgModule({
  imports: [
    SharedModule,
    EntryRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class EntryModule { }
