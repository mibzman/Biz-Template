import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class EntryModule { }
