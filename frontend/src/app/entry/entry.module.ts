import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule }   from '@angular/forms';

import { EqualValidator } from './equal-validator.directive'
import { EntryGuard } from '../entry.guard'
import { EntryRoutingModule } from './entry-routing.module';
import { CallbackComponent } from './callback/callback.component'

@NgModule({
  imports: [
    SharedModule,
    EntryRoutingModule,
    FormsModule
  ],
  exports: [LoginComponent, SignupComponent],
  declarations: [LoginComponent, SignupComponent, EqualValidator, CallbackComponent]
})
export class EntryModule { }
